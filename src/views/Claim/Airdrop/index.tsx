import styles from "./styles.module.sass";
import moment from 'moment'

export interface AirdropProps {
  wallet?: object | React.ReactNode;
}

const Airdrop = ({ wallet }: AirdropProps) => {
  return (
    <>
      <section className={styles.airdrop}>
        <div className="container">
          <div className={styles.title}>
            <h2>Airdrop claim</h2>
          </div>
          <div className={styles.wallet_address}>
            Wallet Address: <a href="#" target="_blank">0x7A...AdF9</a>
          </div>
          {wallet ? (
            <div className={styles.content}>
              <div className={`${styles.claim_time} d-flex justify-content-between align-items-start`}>
                <span className={styles.claim_time_date}>
                  Claim Time: May 1st 2022 - May 15th 2022
                </span>
                <span className={styles.claim_time_countdown}>
                  5 Days 12 hours 13 min 30 sec
                </span>
              </div>
              <div className={styles.table}>
                <div className={styles.table_head}>
                  <div className={`${styles.row} row`}>
                    <div className="col-9">Category</div>
                    <div className="col-3 text-end">Token</div>
                  </div>
                </div>
                <div className={styles.table_body}>
                  <div className={`${styles.row} row`}>
                    <div className="col-9">Travelogers Holders </div>
                    <div className="col-3 text-end">1,000,000</div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-9">Matters POAP holder </div>
                    <div className="col-3 text-end">1,000,000</div>
                  </div>
                  <div className={`${styles.row} row`}>
                    <div className="col-9">Testnet Participants</div>
                    <div className="col-3 text-end">1,000,000</div>
                  </div>
                </div>
                <div className={styles.table_foot}>
                  <div className={`${styles.row} row`}>
                    <div className="col-9">Total Token</div>
                    <div className="col-3 text-end">3,000,000</div>
                  </div>
                </div>
              </div>
              <div className={`${styles.buttons} buttons text-end`}>
                <button className="btn fill disabled">Claim</button>
                <button className="btn fill">Claim</button>
                <button className="btn fill disabled">Claimed</button>
              </div>
            </div>
          ) : (
            <div className={`${styles.empty}`}>
              <div className={`${styles.text} text-center`}>
                <p>Oops! You don’t have any token.</p>
              </div>
              <div className="illu text-center">
                <figure>
                  <img className="img-fluid" src="/img/airdrop-illu.svg" />
                </figure>
              </div>
              <div className="buttons text-end">
                <a className="btn fill" href="https://discord.gg/thespace" target="_blank">Join Discord</a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Airdrop
