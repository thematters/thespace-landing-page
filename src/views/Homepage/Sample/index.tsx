import Image from "next/image";

import sampleThumbPic from "../../../../public/img/sample-thumb.png";
import sampleIlluSvg from "../../../../public/img/sample-illu.svg";

import styles from "./styles.module.sass";

const Sample = () => {
  return (
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
  );
};

export default Sample;
