import { NextApiRequest, NextApiResponse } from "next";
import { customAlphabet } from "nanoid";
import { ethers } from "ethers";

import { throwInternalServerError } from "../utils/error";
import { ErrorCode } from "../enums/error";
import { getFairdropSignMessage } from "~/utils";

const nanoid = customAlphabet("1234567890abcdef", 24);
const exipiryDuration = parseInt(
  process.env.FAIRDROP_EXIPIRY_DURATION || "",
  10
);
const wallet = new ethers.Wallet(process.env.FAIRDROP_PRIVATE_KEY || "");

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const endpoint = `[${req.method} ${req.url}]`;

  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    /**
     * Validations
     */
    // check account
    let account = req.query.account as string;

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

    /**
     * Response
     */
    const nonce = nanoid();
    const expiredAt = Math.round(Date.now() / 1000) + exipiryDuration;
    const message = getFairdropSignMessage({ account, nonce, expiredAt });
    const signerSig = await wallet.signMessage(message);

    return res.status(200).json({
      account,
      nonce,
      expiredAt,
      signerSig,
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
