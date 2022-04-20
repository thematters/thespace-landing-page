import Link from "next/link";

import styles from "./styles.module.sass";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center" id={styles.header}>
      <div className={styles.logo}><Link href="/"><a className="d-block"></a></Link></div>
      <div className={`${styles.buttons} buttons`}>
        {/* <a className={`${styles.btn} btn frame`} href="https://discord.gg/thespace" target="_blank" rel="noreferrer">Join Discord</a> */}
        <a className={`${styles.btn} btn fill`} href="https://forms.gle/rbuzdsdARaLaCDoB6" target="_blank" rel="noreferrer">Sign-up Beta</a>
      </div>
    </header>
  );
};

export default Header;