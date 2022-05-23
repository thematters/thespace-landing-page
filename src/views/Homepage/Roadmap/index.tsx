import Image from "next/image";

import roadmapIlluSvg from "../../../../public/img/roadmap-illu.svg";

import styles from "./styles.module.sass";

const Roadmap = () => {
  return (
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
  );
};

export default Roadmap;
