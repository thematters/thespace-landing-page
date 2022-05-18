import Image from "next/image";

import developerIlluSvg from "../../../../public/img/developer-illu.svg";

import styles from "./styles.module.sass";

const DeveloperCommunity = () => {
  return (
    <section className={styles.developer_community}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className={styles.title}>
              <h2 className={styles.bar}>Developer community</h2>
            </div>
            <div className={styles.text}>
              <p>
                Matters is a writing community based on decentralized
                technologies, with open-sourced codebases and self-governed
                creators. The Space developer community is based on the same
                principle, with bounty programs that reward developers'
                contribution and creativity.
              </p>
            </div>
            <div className={`${styles.buttons} buttons`}>
              <a
                className="btn fill"
                href="https://github.com/thematters/developer-resource"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.illu}>
              <figure className="text-end">
                <Image
                  className="img-fluid"
                  src={developerIlluSvg}
                  alt="Developer Illustration"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCommunity;
