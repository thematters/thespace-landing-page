import styles from "./styles.module.sass";

const Entrance = () => {
  return (
    <>
      <section className={`${styles.entrance} text-center`}>
        <div className={styles.illu}>
          <figure><img className="img-fluid" src="/img/entrance-illu.svg"/></figure>
        </div>
        <div className={`${styles.container} container`}>
          <div className={styles.title}>
            <h2>Claim your Token</h2>
          </div>
          <div className={styles.text}>
            <strong>May 1st 2022 - May 15th 2022</strong>
            <span>Before claim Logbook 2.0, let's connect your wallet first.</span>
          </div>
          <div className={styles.wallet}>
            <button className={styles.metamask}>Metamask</button>
            <button className={styles.walletconnect}>WalletConnect</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Entrance
