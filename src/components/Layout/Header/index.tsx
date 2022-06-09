import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import styles from "./styles.module.sass";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [isLaunch, setLaunch] = useState(false);
  const [isClaim, setClaim] = useState(false);

  const activeClasses = classNames({
    [styles.active]: isActive,
  });

  const toggleActive = () => {
    setActive(!isActive);
  };

  const router = useRouter();
  const isClaimPage = router.pathname === "/claim";

  useEffect(() => {
    if (isActive) {
      setActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  useEffect(() => {
    if (new Date() > new Date(process.env.NEXT_PUBLIC_LAUNCH_START_AT || "")) {
      setLaunch(true);
    }
    if (
      new Date() > new Date(process.env.NEXT_PUBLIC_CLAIM_START_AT || "") &&
      new Date() < new Date(process.env.NEXT_PUBLIC_CLAIM_END_AT || "")
    ) {
      setClaim(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {isClaim ? (
          isLaunch ? (
            <>
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
            </>
          ) : (
            <Link href="/claim">
              <a className={`${styles.btn} ${styles.fill}`}>Claim $SPACE</a>
            </Link>
          )
        ) : isLaunch ? (
          <>
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
          </>
        ) : (
          <a
            className={`${styles.btn} ${styles.fill}`}
            href="https://discord.gg/thespace"
            target="_blank"
            rel="noreferrer"
          >
            Join Discord
          </a>
        )}
      </div>
      <div className={`${styles.burger} ${activeClasses} d-lg-none`}>
        <button onClick={toggleActive}></button>
      </div>
    </header>
  );
};

export default Header;
