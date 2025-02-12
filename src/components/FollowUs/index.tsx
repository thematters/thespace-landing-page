import styles from "./styles.module.sass";

const FollowUs = () => {
  return (
    <section className={styles.follow_us}>
      <div className="container">
        <div className={`${styles.title} text-center`}>
          <h2>[ Follow Us ]</h2>
        </div>
        <div className={`${styles.social} text-center`}>
          <a
            className={styles.twitter}
            href="https://x.com/0x_SpaceDAO"
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.icon}></span>
          </a>
          <a
            className={styles.discord}
            href="https://discord.gg/Th3q7pZsFx"
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

export default FollowUs;
