import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.sass";

const Header = () => {
  const [isActive, setActive] = useState(false);

  const activeClasses = classNames({
    [styles.active]: isActive,
  });

  const toggleActive = () => {
    setActive(!isActive);
  };

  const router = useRouter();

  useEffect(() => {
    if (isActive) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className={`${styles.menu} ${activeClasses}`}>
        <a
          href="https://wiki.thespace.game/press-release"
          target="_blank"
          rel="noreferrer"
        >
          News
        </a>
        <a href="https://wiki.thespace.game/" target="_blank" rel="noreferrer">
          Wiki
        </a>
        <a
          href="https://wiki.thespace.game/introduction-to-the-space"
          target="_blank"
          rel="noreferrer"
        >
          Introduction
        </a>
        <a
          href="https://wiki.thespace.game/introducing-space-token"
          target="_blank"
          rel="noreferrer"
        >
          $SPACE
        </a>
        <Link href="/claim">
          <a className={`${styles.btn} ${styles.frame}`}>Claim $SPACE</a>
        </Link>
        <a
          className={`${styles.btn} ${styles.fill}`}
          href="https://app.thespace.game/"
          target="_blank"
          rel="noreferrer"
        >
          Launch App
        </a>
      </div>
      <div className={`${styles.burger} ${activeClasses} d-lg-none`}>
        <button onClick={toggleActive}></button>
      </div>
    </header>
  );
};

export default Header;
