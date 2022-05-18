import Image from "next/image";

import featuresIllu1Svg from "../../../../public/img/features-illu-1.svg";
import featuresIllu2Svg from "../../../../public/img/features-illu-2.svg";
import featuresIllu3Svg from "../../../../public/img/features-illu-3.svg";

import styles from "./styles.module.sass";

const Features = () => {
  return (
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
                  src={featuresIllu1Svg}
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
                  src={featuresIllu2Svg}
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
                <Image className="img-fluid" src={featuresIllu3Svg} alt="DAO" />
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
  );
};

export default Features;
