import styles from "./styles.module.sass";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.bar}>FAQ</h2>
        </div>
        <div className={styles.content}>
          <details>
            <summary>What is NFT? What is $STK ?</summary>
            <div className={styles.text}>
              <p>
                NFT stands for "non-fungible token". It is a special and unique
                digital item that users can buy, own, and trade.
              </p>
              <p>
                Logbook 2.0 is generated based on ERC-721 and issued on Polygon.
                As a new digital writing method, NFT conforms to the laws of
                Matterverse. We are independent and protect creators’ rights,
                while connecting with each other in many different ways
              </p>
            </div>
          </details>
          <details>
            <summary>How do I use $STK ?</summary>
            <div className={styles.text}>
              <p></p>
            </div>
          </details>
          <details>
            <summary>How can I purchase a pixel ?</summary>
            <div className={styles.text}>
              <p></p>
            </div>
          </details>
          <details>
            <summary>How to know the pixels I own?</summary>
            <div className={styles.text}>
              <p></p>
            </div>
          </details>
          <details>
            <summary>What are gas fees? What are gas fees necessary?</summary>
            <div className={styles.text}>
              <p></p>
            </div>
          </details>
        </div>
        <div className={`${styles.buttons} buttons d-flex justify-content-end`}>
          <a
            className="btn fill"
            href="https://discord.gg/thespace"
            target="_blank"
            rel="noreferrer"
          >
            Ask on Discord
          </a>
        </div>
        <div className={`${styles.social} text-center`}>
          <a
            className={styles.twitter}
            href="https://twitter.com/thespace2022"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}></span>
          </a>
          <a
            className={styles.discord}
            href="https://discord.gg/thespace"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
