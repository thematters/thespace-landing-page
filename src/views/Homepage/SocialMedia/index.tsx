import styles from "./styles.module.sass";

const SocialMedia = () => {
  return (
    <section className={styles.social_media}>
      <div className="container">
        <div
          className={`${styles.title} d-flex justify-content-between align-items-center`}
        >
          <h2 className={styles.bar}>Social Media</h2>
          <div className="buttons">
            <a
              className="btn fill"
              href="https://twitter.com/thespace2022"
              target="_blank"
              rel="noreferrer"
            >
              View More
            </a>
          </div>
        </div>
        <div className={styles.board}>
          <a
            className="twitter-timeline"
            href="https://twitter.com/thespace2022"
            data-tweet-limit="1"
            data-width="500"
          >
            Tweets by @thespace2022
          </a>
          <script async src="https://platform.twitter.com/widgets.js" />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
