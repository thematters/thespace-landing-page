import { useState } from "react";
import classNames from "classnames";
import { useAccount } from "wagmi";

import {
  fetchWrapper,
} from "~/utils";

import styles from "./styles.module.sass";

type StepsProps = {
  next: (val: any) => void;
};

type ClaimData = {
  account: String,
  nonce: String,
  exipredAt: String,
  signerSig: String
}

const Steps: React.FC<StepsProps> = ({ next }) => {
  const [step, setStep] = useState(0);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: accountData } = useAccount();
  const [claimData, setClaimData] = useState<ClaimData>();

  const account = accountData?.address;

  const verifyETHAddress = async () => {
    setLoading(true);
    try {
      const data = await fetchWrapper.get(
        `/api/fairdrop/nonce?account=`+account
      );
      setClaimData(data);
      console.log(data);
      setStep(2);
    } catch (e) {
      console.error(e);
      next("not_eligible");
    }
    setLoading(false);
  };
  const verifyTwitterAccount = () => {
    setStep(3);
  };
  const claimSpace = () => {
    next("success");
  };

  const amountPerAddress =
    process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

  return (
    <section className={styles.steps}>
      <div className="container">
        <div className={styles.title}>
          <h2>Claim {amountPerAddress} $SPACE</h2>
          <p>
            Congrats! You’re eligible to claim tokens. Here are instruction to
            proceed:
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
                <span>Verify your Ethereum address</span>
                {step === 1 && (
                  <div className="buttons">
                    <button className="btn fill" onClick={verifyETHAddress}>
                      Verify
                    </button>
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
                <span>Verify your Twitter account</span>
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
              })}
            >
              <span>Copy and paste the tweet link and claim your $SPACE</span>
              {step === 3 && (
                <div className="d-flex justify-content-between align-items-center">
                  <input className="form-control" type="text" />
                  <div className="buttons">
                    <button className="btn fill" onClick={claimSpace}>
                      Claim
                    </button>
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
                  Use of this website constitutes acceptance of The Space <a
                    href="https://wiki.thespace.game/the-space-terms-of-use-community-code-of-conduct "
                    target="_blank"
                    rel="noreferrer"
                  >Term of Use</a>.
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
