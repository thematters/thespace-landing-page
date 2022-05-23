import styles from "./styles.module.sass";

const AboutTheTeam = () => {
  return (
    <section className={styles.about_the_team}>
      <a
        className={`${styles.ribbon} ${styles.lime}`}
        href="https://matters-lab.io/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.inner}></div>
      </a>
      <a
        className={`${styles.ribbon} ${styles.grey}`}
        href="https://matters-lab.io/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.inner}></div>
      </a>
    </section>
  );
};

export default AboutTheTeam;
