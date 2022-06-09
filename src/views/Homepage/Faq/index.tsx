import styles from "./styles.module.sass";

const Faq = () => {
  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.bar}>FAQ</h2>
        </div>
        <div className={styles.content}>
          <details>
            <summary>Why create The Space? </summary>
            <div className={styles.text}>
              <p>
                At Matters Lab, we are passionate about creating a truly
                decentralized and self-sustaining community in a public space
                for content creators. With The Space, we wanted to see if
                creators can come together to govern an online public space
                under a sustainable economic model.
              </p>
              <p>
                By introducing a property market to stimulate profit-driven
                behaviors, Harberger Tax to ensure efficient pixel trading, UBI
                to redistribute capital, and SpaceDAO to encourage democracy, we
                hope The Space will stay sustainable as a self-governed
                community and endure the erosion of time.
              </p>
            </div>
          </details>
          <details>
            <summary>What is Partial Common Ownership? </summary>
            <div className={styles.text}>
              <p>
                Partial Common Ownership (PCO) is a type of ownership that is
                fairer and more efficient than private ownership in capitalism
                and common ownership in communism. PCO requires assets to be in
                a state of continuous auction (every owned item is always on
                sale).
              </p>
            </div>
          </details>
          <details>
            <summary>What is the Harberger Tax?</summary>
            <div className={styles.text}>
              <p>
                Harberger Tax is an economic policy that optimizes the
                distribution of public resources with the power of the market to
                increase society&apos;s welfare. It can be summarized in two
                rules:
              </p>
              <ul>
                <li>
                  People can set any price for their own assets and pay a
                  property tax proportional to the set price.
                </li>
                <li>
                  Anyone can buy an asset from the owner at any time as long as
                  the bid price is higher than the set price.
                </li>
              </ul>
            </div>
          </details>
          <details>
            <summary>How can a pixel always be on sale?</summary>
            <div className={styles.text}>
              <p>
                Under Harberger Tax, every pixel owner in The Space must set a
                price for their plot and pay a tax corresponding to this price.
                If the owner doesn&apos;t want to sell the pixel, they must pay
                a higher tax to keep it. This deters any pixel owner from
                monopolizing a plot and keeps the market liquid at all times.
              </p>
            </div>
          </details>
          <details>
            <summary>What is Universal Basic Income? </summary>
            <div className={styles.text}>
              <p>
                Universal basic income (UBI) is an income redistribution method
                where everyone receives a fixed income regardless of their
                financial situation. In The Space, the majority of the tax
                collected is returned to the participants of the game. The
                intention of a Universal Basic Income (UBI) is to distribute
                income evenly so more creators can continue participating in the
                game.
              </p>
            </div>
          </details>
          <details>
            <summary>What is the SpaceDAO?</summary>
            <div className={styles.text}>
              <p>
                SpaceDAO is the home of all creators. While The Space is
                governed by Harberger Tax, the SpaceDAO determines the rules of
                the tax and other economic parameters, such as the UBI ratio,
                canvas size, and the use of the Community Fund. Members of
                SpaceDAO can propose any changes to these parameters, initiate
                bounty programs, and recruit third-party developers.
              </p>
            </div>
          </details>
          <details>
            <summary>How will $SPACE be distributed? </summary>
            <div className={styles.text}>
              <p>A total of 1 billion $SPACE tokens will be distributed via:</p>
              <ul>
                <li>
                  <b>Initial Airdrop (2%):</b> to those who actively
                  participated in test launches of The Space and contributed to
                  the Matters Lab community
                </li>
                <li>
                  <b>Future Airdrops (3%):</b> to potential users of The Space
                </li>
                <li>
                  <b>Early Stakeholders (8.74%):</b> to stakeholders who
                  contribute to The Space's growth and development in the first
                  year
                </li>
                <li>
                  <b>Community Fund (66.26%):</b> to the SpaceDAO
                </li>
                <li>
                  <b>Liquidity Pool (5%):</b> available to the public for
                  purchase on Uniswap
                </li>
                <li>
                  <b>Matters Lab Team (15%)</b>
                </li>
              </ul>
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
