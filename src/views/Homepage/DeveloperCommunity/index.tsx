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
              <h2 className={styles.bar}>Developer Community</h2>
            </div>
            <div className={styles.text}>
              <p>
                Our developer community is based on open-sourced principles with
                rewards for their contribution and creativity. A Creator Fund
                will reward developers who develop various third-party tools for
                The Space.
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
