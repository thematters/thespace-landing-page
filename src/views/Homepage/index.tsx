import type { NextPage } from "next";
import Image from "next/image";

import styles from "./styles.module.sass";

import introIlluSvg from "../../../public/img/intro-illu.svg";
import introDividerSvg from "../../../public/img/intro-divider.svg";
import sampleThumbPic from "../../../public/img/sample-thumb.png";
import sampleIlluSvg from "../../../public/img/sample-illu.svg";
import roadmapIlluSvg from "../../../public/img/roadmap-illu.svg";

import features1Svg from "../../../public/img/features-1.svg";
import features2Svg from "../../../public/img/features-2.svg";
import features3Svg from "../../../public/img/features-3.svg";

const Homepage: NextPage = () => (
  <main className={styles.index} id="main">
    <section className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col-12 p-0">
            <div className={styles.illu}>
              <figure className="text-end">
                <Image
                  className="img-fluid"
                  src={introIlluSvg}
                  alt="Intro Illustration"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-5 col-xl-4">
            <div className={styles.divider}>
              <figure>
                <Image
                  className="img-fluid"
                  src={introDividerSvg}
                  alt="Intro Divider"
                />
              </figure>
            </div>
            <div className={styles.title}>
              <h1 className={styles.bar}>
                The Space: <br />
                an everlasting, Draw-to-Earn public space
              </h1>
            </div>
            <div className={styles.text}>
              <p>
                The Space is a pixel map where players can tokenize, own, trade
                and color pixels. Pixels are tokenized as ERC721 tokens and
                traded under Harberger Tax, while owners of pixels receive
                Universal Basic Income(UBI). In the Future, The administration
                of The Space will be transfered to SpaceDAO, a decentralized
                autonomous organization formed by all $SPACE token holders.
              </p>
            </div>
            <div className={`${styles.buttons} buttons`}>
              <a
                className="btn"
                href="https://discord.gg/thespace"
                target="_blank"
                rel="noreferrer"
              >
                Join Discord
              </a>
            </div>
          </div>
          <div className="col-md-7 col-xl-8">
            <div className="d-flex justify-content-end align-items-end h-100">
              <div className={styles.tips}>
                <span className={styles.icon}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.subscribe}>
      <div className="container d-flex flex-column align-items-center">
        <div className={`${styles.title} text-center`}>
          <h2>Subscribe for Updates</h2>
          <span>Get the latest news about our progress!</span>
        </div>
        <div className={styles.form}>
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form
            action="https://app.convertkit.com/forms/3264120/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="3264120"
            data-uid="4a7d3cc50d"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! 🎉 You are now subscribed to the newsletter.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400"
          >
            <div data-style="clean">
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              ></ul>
              <div
                data-element="fields"
                data-stacked="false"
                className="seva-fields formkit-fields"
              >
                <div className={styles["formkit-field"]}>
                  <label>Email *</label>
                  <input
                    className="formkit-input"
                    name="email_address"
                    aria-label="Email *"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className={styles["formkit-field"]}>
                  <label>ETH Address</label>
                  <input
                    className="formkit-input"
                    aria-label="ETH Address"
                    name="fields[first_name]"
                    placeholder="Enter your ETH Address"
                    type="text"
                  />
                </div>
                <div className="text-end">
                  <button
                    data-element="submit"
                    className={styles["formkit-submit"]}
                  >
                    {/* <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div> */}
                    <span className={styles.text}>Submit</span>
                    <span className={styles.icon}></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section className={styles.sample}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={styles.thumb}>
              <figure>
                <Image
                  className="img-fluid"
                  src={sampleThumbPic}
                  alt="Sample Thumbnail"
                />
              </figure>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className={styles.title}>
              <h2>Buy, Sell, Pay Tax and Collect Dividend</h2>
            </div>
            <div className={styles.illu}>
              <figure className="text-end">
                <Image
                  className="img-fluid"
                  src={sampleIlluSvg}
                  alt="Sample Illustration"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.features}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.bar}>Features</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.feature}>
            <div className={styles.illu}>
              <figure className="text-center">
                <Image
                  className="img-fluid"
                  src={features1Svg}
                  alt="Create with others"
                />
              </figure>
            </div>
            <div className={styles.text}>
              <h3>Create with others</h3>
              <p>
                The Space is a digital public graffiti wall where everyone can
                show their ideas, pixel by pixel, and collaboratively.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.illu}>
              <figure className="text-center">
                <Image
                  className="img-fluid"
                  src={features2Svg}
                  alt="Radical Market"
                />
              </figure>
            </div>
            <div className={styles.text}>
              <h3>Radical Market</h3>
              <p>
                The Space is governed by Harberger Tax and Universal Basic
                Income (UBI) to decide the flow of pixels and the distribution
                of capitals, so that the public resource can be efficiently
                utilized.
              </p>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.illu}>
              <figure className="text-center">
                <Image className="img-fluid" src={features3Svg} alt="DAO" />
              </figure>
            </div>
            <div className={styles.text}>
              <h3>Decentralized Autonomous Organization</h3>
              <p>
                The Space is backed by blockchain and owned by the SpaceDAO,
                meaning that The Space will never be shut down by any
                authorities, and all works created will be accessible forever.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.roadmap}>
      <div className="container">
        <div className={`${styles.title} text-center`}>
          <div className={styles.illu}>
            <figure className="text-center">
              <Image
                className="img-fluid"
                src={roadmapIlluSvg}
                alt="Roadmap Illustration"
              />
            </figure>
          </div>
          <h2>[ Roadmap ]</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.road}></div>
          <div className={styles.plan}>
            <span className={styles.date}>Apr 2022</span>
            <span className={styles.dot}></span>
            <span className={styles.text}>Lauch on testnet</span>
          </div>
          <div className={styles.plan}>
            <span className={styles.date}>May 2022</span>
            <span className={styles.dot}></span>
            <span className={styles.text}>Token Airdrop</span>
          </div>
          <div className={styles.plan}>
            <span className={styles.date}>May 2022</span>
            <span className={styles.dot}></span>
            <span className={styles.text}>Launch on Polygon</span>
          </div>
          <div className={styles.plan}>
            <span className={styles.date}>Late 2022</span>
            <span className={styles.dot}></span>
            <span className={styles.text}>Initiate SpaceDAO</span>
          </div>
          <div className={`${styles.plan} d-md-none d-lg-block`}></div>
        </div>
      </div>
    </section>
    <section className={styles.social_media}>
      <div className="container">
        <div
          className={`${styles.title} d-flex justify-content-between align-items-center`}
        >
          <h2 className={styles.bar}>Social Media</h2>
          <div className="buttons">
            <a
              className="btn"
              href="https://twitter.com/thespace2022"
              target="_blank"
              rel="noreferrer"
            >
              View More
            </a>
          </div>
        </div>
        <div className={styles.board}>
          <script async src="https://platform.twitter.com/widgets.js" />
          <a
            className="twitter-timeline"
            href="https://twitter.com/thespace2022"
            data-tweet-limit="1"
            data-width="500"
          >
            Tweets by @thespace2022
          </a>
        </div>
      </div>
    </section>
    <section className={styles.follow_us}>
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
      <div className="container">
        <div className={`${styles.title} text-center`}>
          <h2>[ Follow Us ]</h2>
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
  </main>
);

export default Homepage;
