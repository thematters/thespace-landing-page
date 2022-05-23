import Image from "next/image";

import featuresIllu1Svg from "../../../../public/img/features-illu-1.svg";
import featuresIllu2Svg from "../../../../public/img/features-illu-2.svg";
import featuresIllu3Svg from "../../../../public/img/features-illu-3.svg";
import featuresIllu4Svg from "../../../../public/img/features-illu-4.svg";

import styles from "./styles.module.sass";

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.title}>
          <h2 className={styles.bar}>How it works</h2>
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
              <h3>Create together on a pixel canvas like Reddit r/place</h3>
              <p>
                We love r/place and want to build a Web3 version of it. Creators
                can collaborate on their ideas, pixel by pixel, in a truly
                decentralized and inclusive public space.
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
              <h3>Every pixel NFT is always on sale under Harberger Tax</h3>
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
                <Image className="img-fluid" src={featuresIllu4Svg} alt="DAO" />
              </figure>
            </div>
            <div className={styles.text}>
              <h3>Enjoy Universal Basic Income (UBI)</h3>
              <p>
                The majority of the tax collected is returned to the
                participants of The Space. The intention of a Universal Basic
                Income (UBI) is to distribute income evenly so more creators can
                continue participating in the game.
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
              <h3>A truly decentralized, self-governing community</h3>
              <p>
                SpaceDAO, formed by all stakeholders of The Space, is the owner
                of The Space. SpaceDAO governs decides the tax rate, the
                proportion of UBI, the scale of the pixel canvas, the community
                fund, and so on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
