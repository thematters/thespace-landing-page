import styles from "./styles.module.sass";

const Empty = () => {
  return (
    <div className={`${styles.empty}`}>
      <div className={`${styles.text} text-center`}>
        <p>Oops! You don&apos;t have any token.</p>
      </div>
      <div className={`${styles.illu} text-center`}>
        <figure>
          <img className="img-fluid" src="/img/airdrop-illu.svg" />
        </figure>
      </div>
      <div className={`${styles.buttons} buttons text-end`}>
        <a
          className="btn fill"
          href="https://discord.gg/thespace"
          target="_blank"
          rel="noreferrer"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default Empty;
