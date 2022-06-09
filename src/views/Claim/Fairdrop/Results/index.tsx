import Link from "next/link";
import { addTokenToMetaMask } from "~/utils";

import styles from "./styles.module.sass";

export type ResultStatus = "already_claimed" | "success" | "";

export interface ResultsProps {
  status?: ResultStatus;
}

const Results = ({ status }: ResultsProps) => {
  const amountPerAddress =
    process.env.NEXT_PUBLIC_FAIRDROP_AMOUNT_PER_ADDRESS || "your";

  return (
    <section className={styles.results}>
      <div className="container">
        <div className={styles.title}>
          <h2>Claim {amountPerAddress} $SPACE</h2>
        </div>
        <div className={`${styles.text} text-center`}>
          {status === "success" && (
            <>
              <h3>Claim Successfully</h3>
              <p>
                We&apos;ve sent $SPACE to your wallet. Please remember to{" "}
                <button
                  type="button"
                  className={styles.highlight}
                  onClick={() => addTokenToMetaMask()}
                >
                  add $SPACE to MetaMask
                </button>
                . Let&apos;s go playground.
              </p>
            </>
          )}
          {status === "already_claimed" && (
            <h3>We&apos;ve sent $SPACE to your wallet.</h3>
          )}
        </div>
        <div className={`${styles.illu} text-center`}>
          <figure>
            {status === "success" ? (
              <img className="img-fluid" src="/img/results-illu-3.svg" />
            ) : (
              <img className="img-fluid" src="/img/results-illu-2.svg" />
            )}
          </figure>
        </div>
        <div className={`${styles.buttons} buttons text-center`}>
          {status === "success" && (
            <>
              <a
                className="btn frame"
                href="https://discord.gg/thespace"
                target="_blank"
                rel="noreferrer"
              >
                Join Discord
              </a>
              <a
                className="btn fill"
                href="https://app.thespace.game/"
                target="_blank"
                rel="noreferrer"
              >
                Launch App
              </a>
            </>
          )}
          {status === "already_claimed" && (
            <a
              className="btn fill"
              href="https://app.thespace.game/"
              target="_blank"
              rel="noreferrer"
            >
              Launch App
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
