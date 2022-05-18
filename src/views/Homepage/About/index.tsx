import Image from "next/image";

import aboutIllu1Svg from "../../../../public/img/about-illu-1.svg";
import aboutIllu2Svg from "../../../../public/img/about-illu-2.svg";

import styles from "./styles.module.sass";

const About = () => {
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
          <h2>About $STK</h2>
        </div>
        <div className={styles.text}>
          <p>
            $SPACE is an ERC-20 token issued by The Space. $SPACE is the
            currency supporting pixel trading, tax paying, income collecting in
            The Space game. In addition, $SPACE holders can participate in
            governing activities of SpaceDAO by staking $SPACE.
          </p>
        </div>
        <div className={`${styles.buttons} buttons`}>
          <a className="btn fill">$SPACE Whitepaper</a>
        </div>
      </div>
    </section>
  );
};

export default About;
