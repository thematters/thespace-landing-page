import Link from "next/link";

import styles from "./styles.module.sass";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center" id={styles.header}>
      <div className={styles.logo}><Link href="/"><a className="d-block"></a></Link></div>
      <div className={`${styles.buttons} buttons`}><a className={`${styles.btn} btn`} href="https://discord.gg/rbsfr4KMR7" target="_blank" rel="noreferrer">Join Discord</a></div>
    </header>
  );
};

export default Header;