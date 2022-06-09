import styles from "./styles.module.sass";

type AboutSpaceTokenProps = {
  extraBtn?: React.ReactNode;
  illu?: React.ReactNode;
};

const AboutSpaceToken: React.FC<AboutSpaceTokenProps> = ({
  extraBtn,
  illu,
}) => {
  return (
    <section className={styles.about}>
      <div className={`${styles.container} container text-center`}>
        {illu}
        <div className={styles.title}>
          <h2>About $SPACE</h2>
        </div>
        <div className={styles.text}>
          <p>
            $SPACE is an ERC-20 token issued by The Space, serving as the medium
            of exchange.
          </p>
        </div>
        <div className={`${styles.buttons} buttons`}>
          <a
            className="btn fill"
            href="https://wiki.thespace.game/introducing-space-token"
            target="_blank"
            rel="noreferrer"
          >
            Introducing $SPACE
          </a>
          {extraBtn}
        </div>
      </div>
    </section>
  );
};

export default AboutSpaceToken;
