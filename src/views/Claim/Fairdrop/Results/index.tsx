import Link from "next/link";

import styles from "./styles.module.sass";

export interface ResultsProps {
  status?: "have_send" | "success";
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
                We&apos;ve sent $SPACE to your wallet. Please remember to add
                $SPACE to MetaMask. Let&apos;s go playground.
              </p>
            </>
          )}
          {status === "have_send" && (
            <h3>We&apos;ve sent $SPACE to your wallet.</h3>
          )}
        </div>
        <div className={`${styles.illu} text-center`}>
          <figure>
            {status === "success" ? (
              <img className="img-fluid" src="/img/results-illu-3.svg" />
            ) : status === "not_eligible" ? (
              <img className="img-fluid" src="/img/results-illu-1.svg" />
            ) : (
              <img className="img-fluid" src="/img/results-illu-2.svg" />
            )}
          </figure>
        </div>
        <div className={`${styles.buttons} buttons text-center`}>
          {status === "success" && (
            <>
              <Link href="/#subscribe">
                <a className="btn frame">Subscribe</a>
              </Link>
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
          {status === "have_send" && (
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
