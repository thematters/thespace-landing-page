import Image from "next/image";

import aboutIllu1Svg from "../../../public/img/about-illu-1.svg";
import aboutIllu2Svg from "../../../public/img/about-illu-2.svg";

import styles from "./styles.module.sass";

type AboutSpaceTokenProps = {
  extraBtn?: React.ReactNode;
};

const AboutSpaceToken: React.FC<AboutSpaceTokenProps> = ({ extraBtn }) => {
  return (
    <section className={styles.about}>
      <div className={`${styles.container} container text-center`}>
        <div className={`${styles.illu_1} d-none d-md-block`}>
          <figure>
            <Image
              className="img-fluid"
              src={aboutIllu1Svg}
              alt="About Illustration"
            />
          </figure>
        </div>
        <div className={`${styles.illu_2}`}>
          <figure>
            <Image
              className="img-fluid"
              src={aboutIllu2Svg}
              alt="About Illustration"
            />
          </figure>
        </div>
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
