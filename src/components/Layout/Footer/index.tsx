import Link from "next/link";

import styles from "./styles.module.sass";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className={styles.logo}><Link href="/"><a className="d-block"></a></Link></div>
            <div className={styles.text}>
              <p>The Space is a pixel map where players can tokenize, own, trade and color pixels.</p>
              <p className="d-none d-md-block">Copyright © 2022 matters-lab.io</p>
            </div>
          </div>
          <div className="col-5 offset-1 col-md-3 offset-md-3">
            <div className={`${styles.title} d-none d-md-block`}>
              <h3>The Space</h3>
            </div>
            <div className={styles.list}>
              <ul>
                <li><Link href="/"><a>Home</a></Link></li>
                <li><a href="https://matters.news/" target="_blank" rel="noreferrer">Matters.news</a></li>
                <li><a href="https://matters-lab.io/" target="_blank" rel="noreferrer">Matters-lab.io</a></li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={styles.social}><a className={styles.twitter} href="https://twitter.com/thespace2022" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.discord} href="https://discord.gg/thespace" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.telegram} href="https://t.me/joinchat/BXzlWUhXaWNZ-TXJZJCzDQ" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.youtube} href="https://www.youtube.com/c/Matterslab" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.opensea} href="https://opensea.io/collection/traveloggers" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.medium} href="https://matterslab.medium.com/" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.instagram} href="https://www.instagram.com/matterslab2018/" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a><a className={styles.facebook} href="https://www.facebook.com/MattersLab2018/" target="_blank" rel="noreferrer"><i className={styles.icon}></i></a></div>
          </div>
          <div className="col-12 d-md-none">
            <div className={`${styles.copyright} text-center`}><span>Copyright © 2022 matters-lab.io</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;