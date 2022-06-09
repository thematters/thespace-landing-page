import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import { Client } from "twitter-api-sdk";
import Redis from "ioredis";

import { throwInternalServerError } from "../utils/error";
import { ErrorCode } from "../enums/error";
import { getFairdropSignMessage, getTweetID } from "~/utils";
import { logToSlack, SlackMsgType } from "../utils/slack";

const wallet = new ethers.Wallet(process.env.FAIRDROP_PRIVATE_KEY || "");
const fairdropContract = process.env.NEXT_PUBLIC_FAIRDROP_CONTRACT || "";
const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN || "");
const redisClient = new Redis(process.env.REDIS_CONNECTION_URL || "");

type FairdropConfirmBody = {
  account: string;
  nonce: string;
  expiredAt: number;
  signerSig: string;
  claimerSig: string;
  tweetURL: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const endpoint = `[${req.method} ${req.url}]`;

  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const body = req.body as FairdropConfirmBody;

    /**
     * Validations
     */
    // check account
    let account = body.account;
    if (!account) {
      return res.status(400).send({
        code: ErrorCode.INVALID_ACCOUNT,
        message: "`account` in query string is required",
      });
    }

    try {
      account = ethers.utils.getAddress(account);
    } catch (e) {
      return res.status(400).send({
        code: ErrorCode.INVALID_ACCOUNT,
        message: "`account` is invalid.",
      });
    }

    // check expiredAt
    const expiredAt = new Date(body.expiredAt * 1000);
    if (expiredAt < new Date()) {
      return res.status(400).send({
        code: ErrorCode.CLAIM_EXPIRED,
        message: "Claim expired.",
      });
    }

    // check signatures
    const message = getFairdropSignMessage({
      account,
      nonce: body.nonce,
      expiredAt: body.expiredAt,
    });
    const signerAddress = ethers.utils.recoverAddress(
      ethers.utils.hashMessage(message),
      body.signerSig
    );
    const claimerAddress = ethers.utils.recoverAddress(
      ethers.utils.hashMessage(message),
      body.claimerSig
    );
    if (signerAddress !== wallet.address || claimerAddress !== account) {
      return res.status(400).send({
        code: ErrorCode.INVALID_SIGNATURE,
        message: "`signerSig` or `claimerSig` is invalid.",
      });
    }

    /**
     * Retrieve Tweet
     */
    // check tweet url
    const tweetId = getTweetID(body.tweetURL);
    if (!tweetId) {
      return res.status(400).send({
        code: ErrorCode.INVALID_TWEET_URL,
        message: "`tweetURL` is invalid.",
      });
    }

    // check tweet content
    const tweet = await twitterClient.tweets.findTweetById(tweetId, {
      expansions: ["author_id"],
      "tweet.fields": ["entities"],
    });
    const tweetContent = tweet.data?.text;
    const authorId = tweet.data?.author_id;
    const isContentIncludesNonce = !!tweetContent?.includes(body.nonce);
    const isURLIncludesNonce = !!tweet.data?.entities?.urls?.some((urlObj) =>
      urlObj.expanded_url?.includes(body.nonce)
    );

    if (!authorId || (!isContentIncludesNonce && !isURLIncludesNonce)) {
      return res.status(400).send({
        code: ErrorCode.INVALID_TWEET_URL,
        message: "`tweetURL` is invalid.",
      });
    }

    const userId = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(`twitter:${authorId}`)
    );

    // record to redis
    try {
      const key = `${
        process.env.NEXT_PUBLIC_RUNTIME_ENV || "development"
      }:${userId}`;
      await redisClient.set(
        key,
        JSON.stringify({
          account,
          authorId,
          tweetId,
          nonce: body.nonce,
          expiredAt: body.expiredAt,
        })
      );
    } catch (error) {
      await logToSlack({
        message: `[redis] unable to set ${userId}`,
        data: error,
        type: SlackMsgType.failed,
      });
    }

    /**
     * Response
     */
    const msg = ethers.utils.solidityPack(
      ["address", "bytes32", "string", "uint256", "address"],
      [account, userId, body.nonce, body.expiredAt, fairdropContract]
    );
    const hash = ethers.utils.solidityKeccak256(["bytes"], [msg]);
    const sig = await wallet.signMessage(ethers.utils.arrayify(hash));
    const splitedSig = ethers.utils.splitSignature(sig);

    return res.status(200).json({
      account,
      userId,
      nonce: body.nonce,
      expiredAt: body.expiredAt,
      sigV: splitedSig.v,
      sigR: splitedSig.r,
      sigS: splitedSig.s,
    });
  } catch (error) {
    const errorResult = await throwInternalServerError(
      endpoint,
      req,
      res,
      error
    );
    return errorResult;
  }
};

export default handler;
