import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  useAccount,
  useContractRead,
  useSignMessage,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import Toast from "~/components/Toast";
import {
  fetchWrapper,
  getFairdropSignMessage,
  fairdropABI,
  isTweetURL,
} from "~/utils";

import styles from "./styles.module.sass";
import { ResultStatus } from "../Results";

type StepsProps = {
  setResultStatus: (val: ResultStatus) => void;
};

type ClaimData = {
  account: string;
  nonce: string;
  userId?: string;
  expiredAt: number;
  signerSig: String;
  sigV?: string;
  sigR?: string;
  sigS?: string;
};

const amountPerAddress =
  process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

const getAPIErrorMessage = (code: string) => {
  const msg = {
    INTERNAL_ERROR:
      "A server error occurred while processing the request, please retry.",
    INVALID_ACCOUNT: "Wallet address is invalid.",
    INVALID_NONCE: "Nonce is invalid, please retry.",
    INVALID_SIGNATURE: "Signature is invalid, please retry.",
    INVALID_TWEET_URL:
      "Please provide a tweet url that Twitter account has never claimed.",
    CLAIM_EXPIRED: "Fairdrop claim has expired, please retry.",
  };

  return msg[code as keyof typeof msg] || msg.INTERNAL_ERROR;
};

const Steps: React.FC<StepsProps> = ({ setResultStatus }) => {
  const { data: accountData } = useAccount();
  const account = accountData?.address;

  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState(false);

  const [apiError, setAPIError] = useState("");
  const [apiLoading, setAPILoading] = useState(false);

  const [twitterValidate, setTwitterValidate] = useState(false);
  const [twitterUrl, setTwitterUrl] = useState("");
  const [claimData, setClaimData] = useState<ClaimData>();

  // Verify Ethereum address
  const {
    data: sigData,
    error: sigError,
    isSuccess: sigSuccess,
    isLoading: sigLoading,
    signMessage,
  } = useSignMessage();

  // Check if address is already claimed
  const { data: isAddressClaimed } = useContractRead(
    {
      addressOrName: process.env.NEXT_PUBLIC_FAIRDROP_CONTRACT || "",
      contractInterface: fairdropABI,
    },
    "addressClaimed",
    { args: account }
  );

  // Check if userId (Twitter account) is already claimed
  const { data: isUserIdClaimed } = useContractRead(
    {
      addressOrName: process.env.NEXT_PUBLIC_FAIRDROP_CONTRACT || "",
      contractInterface: fairdropABI,
    },
    "userIdClaimed",
    { args: claimData?.userId }
  );

  // Claim fairdrop
  const {
    data: claimTx,
    error: claimError,
    // isSuccess: claimSuccess,
    isLoading: claimLoading,
    write,
  } = useContractWrite(
    {
      addressOrName: process.env.NEXT_PUBLIC_FAIRDROP_CONTRACT || "",
      contractInterface: fairdropABI,
    },
    "claim"
  );

  // wait claimging transaction
  const { isLoading: isWaitingTx } = useWaitForTransaction({
    hash: claimTx?.hash,
    confirmations: 3,
    onSuccess(data) {
      setResultStatus("success");
      console.log("Success", data);
    },
  });

  const verifyETHAddress = async () => {
    setAPILoading(true);
    setAPIError("");

    try {
      const data = await fetchWrapper.get(
        "/api/fairdrop/nonce?account=" + account
      );
      setClaimData({ ...claimData, ...data });
      signMessage({
        message: getFairdropSignMessage({
          account: data.account || "",
          nonce: data.nonce || "",
          expiredAt: data.expiredAt || null,
        }),
      });
    } catch (error) {
      // API error handling
      const code = (error as any)?.code;
      setAPIError(getAPIErrorMessage(code));
    }
    setAPILoading(false);
  };

  const verifyTwitterAccount = () => {
    const content = `Inspired by #RedditPlace, The Space is the world's first #NFT #pixelart graffiti wall where players can own, color, and trade pixels under Harberger Tax and Universal Basic Income (UBI).\n#TheSpaceGame #烏塗邦\n\n💰Claim your $SPACE💰 at: https://thespace.game/claim?nonce=${claimData?.nonce}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${window.encodeURIComponent(
        content
      )}`,
      "mywin",
      "left=0,top=0,width=650,height=650"
    );
    setStep(3);
  };

  const followUs = () => {
    window.open(
      "https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Ethespace2022&screen_name=thespace2022",
      "mywin",
      "left=0,top=0,width=650,height=650"
    );
    setStep(4);
  };

  const validateTwitter = (url: string) => {
    const validate = isTweetURL(url);
    setTwitterValidate(validate);
    setTwitterUrl(url);
  };

  const claimSpace = async () => {
    setAPILoading(true);
    setAPIError("");

    try {
      const data = await fetchWrapper.post("/api/fairdrop/confirm", {
        account: claimData?.account,
        nonce: claimData?.nonce,
        expiredAt: claimData?.expiredAt,
        signerSig: claimData?.signerSig,
        claimerSig: sigData,
        tweetURL: twitterUrl,
      });
      setClaimData({ ...claimData, ...data });
      write({
        args: [
          data.account,
          data.userId,
          data.nonce,
          data.expiredAt,
          data.sigV,
          data.sigR,
          data.sigS,
        ],
      });
    } catch (error) {
      // API error handling
      const code = (error as any)?.code;
      setAPIError(getAPIErrorMessage(code));
    }

    setAPILoading(false);
  };

  /**
   * Status
   */
  useEffect(() => {
    if (sigSuccess) {
      setStep(2);
    }
  }, [sigSuccess]);

  useEffect(() => {
    if (isAddressClaimed || isUserIdClaimed) {
      setResultStatus("already_claimed");
    }
  }, [isAddressClaimed, isUserIdClaimed]);

  const isLoading = apiLoading || sigLoading || claimLoading || isWaitingTx;
  const error = apiError || sigError?.message || claimError?.message;

  /**
   * Rendering
   */
  return (
    <section className={styles.steps}>
      {sigSuccess && <Toast status="success" reason="Signed successfully" />}
      {error && <Toast status="failed" reason={error} />}
      <div className="container">
        <div className={styles.title}>
          <h2>Claim {amountPerAddress} $SPACE</h2>
          <p>
            Congrats! You&apos;re eligible to claim tokens. Here are instruction
            to proceed:
          </p>
        </div>
        <div className={styles.content}>
          <ol
            className={classNames({
              [styles.default]: step === 0,
              [styles.start]: step !== 0,
            })}
          >
            <li
              className={classNames({
                [styles.step1]: true,
                [styles.active]: step === 1,
                [styles.actived]: step > 1,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Verify your wallet address</span>
                {step === 1 && (
                  <div className="buttons">
                    {isLoading ? (
                      <button className={`${styles.loading} btn fill disabled`}>
                        &nbsp;
                      </button>
                    ) : (
                      <button className="btn fill" onClick={verifyETHAddress}>
                        Verify
                      </button>
                    )}
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step2]: true,
                [styles.active]: step === 2,
                [styles.actived]: step > 2,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Verify your Twitter account and tweet</span>
                {step === 2 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={verifyTwitterAccount}>
                      Verify
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step3]: true,
                [styles.active]: step === 3,
                [styles.actived]: step > 3,
              })}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>Follow us on Twitter</span>
                {step === 3 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={followUs}>
                      Follow
                    </button>
                  </div>
                )}
              </div>
            </li>
            <li
              className={classNames({
                [styles.step4]: true,
                [styles.active]: step === 4,
              })}
            >
              <span>Copy and paste the tweet link and claim your $SPACE</span>
              {step === 4 && (
                <div className="d-flex justify-content-between align-items-center">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => validateTwitter(e.target.value)}
                    required
                    placeholder="https://twitter.com/thespace2022/status/1534453835934355456"
                  />
                  <div className={`${styles.buttons} buttons`}>
                    {isLoading ? (
                      <button className={`${styles.loading} btn fill disabled`}>
                        &nbsp;
                      </button>
                    ) : (
                      <button
                        className="btn fill"
                        onClick={claimSpace}
                        disabled={!twitterValidate}
                      >
                        Claim
                      </button>
                    )}
                  </div>
                </div>
              )}
            </li>
          </ol>
          {step === 0 && (
            <>
              <p>
                Once verification process completed, you will receive $SPACE
                token
              </p>
              <div className={styles.form_check}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Use of this website constitutes acceptance of The Space{" "}
                  <a
                    href="https://wiki.thespace.game/the-space-terms-of-use-community-code-of-conduct "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Term of Use
                  </a>
                  .
                </label>
              </div>
              <div className={`${styles.buttons} buttons text-end`}>
                <button
                  className="btn fill"
                  disabled={!checked}
                  onClick={() => setStep(1)}
                >
                  Get Started
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Steps;
