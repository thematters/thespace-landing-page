import Link from "next/link";

import styles from "./styles.module.sass";

export interface ResultsProps {
  status?: "not_eligible" | "have_send" | "under_review" | "had_post" | "success" | "";
}

const Results = ({ status }: ResultsProps) => {
  return (
    <section className={styles.results}>
      <div className="container">
        <div className={styles.title}>
          <h2>Claim your $SPACE</h2>
        </div>
        <div className={`${styles.text} text-center`}>
          {status === 'success' &&
            <>
              <h3>Claim Successfully</h3>
              <p>We've sent $SPACE to your wallet. Please remember to add$SPACE to MetaMask. Let's go playground.</p>
            </>
          }
          {status === 'had_post' &&
            <h3>Your had post a tweet before.</h3>
          }
          {status === 'under_review' &&
            <>
              <h3>Your submission is under review.</h3>
              <p>Get $SPACE at Unisawp</p>
            </>
          }
          {status === 'have_send' &&
            <h3>We’ve sent $SPACE to your wallet.</h3>
          }
          {status === 'not_eligible' &&
            <>
              <h3>Unfortunately! You’re not eligible :(</h3>
              <p>Get $SPACE at Unisawp</p>
            </>
          }
        </div>
        <div className={`${styles.illu} text-center`}>
          <figure>
            {status === 'success' ? 
              <img className="img-fluid" src="/img/results-illu-3.svg" /> : 
              status === 'not_eligible' ? 
                <img className="img-fluid" src="/img/results-illu-1.svg" /> : 
                <img className="img-fluid" src="/img/results-illu-2.svg" />
            }
          </figure>
        </div>
        <div className={`${styles.buttons} buttons text-center`}>
          {status === 'success' &&
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
          }
          {status === 'had_post' &&
            <Link href="/">
              <a className="btn fill">Back to Home</a>
            </Link>
          }
          {status === 'under_review' &&
            <Link href="/claim">
              <a className="btn fill">Get $SPACE</a>
            </Link>
          }
          {status === 'have_send' &&
            <a
              className="btn fill"
              href="https://app.thespace.game/"
              target="_blank"
              rel="noreferrer"
            >
              Launch App
            </a>
          }
          {status === 'not_eligible' &&
            <Link href="/claim">
              <a className="btn fill">Get $SPACE</a>
            </Link>
          }
        </div>
      </div>
    </section>
  );
};

export default Results;
