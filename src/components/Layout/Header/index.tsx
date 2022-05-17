import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.sass";

const Header = () => {
  const [isActive, setActive] = useState(false)
  const activeClasses = classNames({
    [styles.active]: isActive
  });
  const toggleActive = () => {
    setActive(!isActive)
  };
  const router = useRouter();
  useEffect(() => {
    if (isActive) {
      setActive(false);
    }
  }, [router.asPath]);
  return (
    <header
      className="d-flex justify-content-between align-items-center"
      id={styles.header}
    >
      <div className={styles.logo}>
        <Link href="/">
          <a className="d-block"></a>
        </Link>
      </div>
      <div className={`${styles.buttons} ${activeClasses} buttons`}>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          The Space Wiki
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
        >
          $SPACE Whitepaper
        </a>
        <Link href="/claim">
          <a className={`${styles.strong}`}>
            Claim $SPACE
          </a>
        </Link>
      </div>
      <div className={`${styles.burger} ${activeClasses} d-lg-none`}>
        <button onClick={toggleActive}></button>
      </div>
    </header>
  );
};

export default Header;
