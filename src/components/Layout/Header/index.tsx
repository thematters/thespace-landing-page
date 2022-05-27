import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import classNames from "classnames";

import { useCountdown } from "~/hooks";

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

  const { days, hours, minutes, seconds } = useCountdown({
    end: process.env.NEXT_PUBLIC_LAUNCH_START_AT || "",
    onEnd: () => setLaunch(true),
  });

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
          <Link href="/claim">
            <a className={`${styles.strong}`}>Claim $SPACE</a>
          </Link>
        ) : isLaunch ? (
          <a
            className={`${styles.strong}`}
            href="https://app.thespace.game/"
            target="_blank"
            rel="noreferrer"
          >
            Playground
          </a>
        ) : (
          <a
            className={`${styles.strong}`}
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
      {!isLaunch && !isClaimPage && (
        <div
          className={`${styles.countdown} d-flex justify-content-between align-items-center`}
        >
          <div className={`${styles.time}`}>
            <div className="d-flex justify-content-between align-items-center">
              <i className={styles.icon}></i>
              <span>
                <b className="d-none d-lg-inline-block">
                  The Space Official Launch in
                </b>{" "}
                <b>{days}</b> days <b>{hours}</b> hours <b>{minutes}</b> mins{" "}
                <b>{seconds}</b> sec
              </span>
            </div>
          </div>
          <div className={`${styles.buttons}`}>
            <a
              className="d-flex justify-content-between align-items-center"
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20220531T120000Z%2F20220531T120000Z&text=The%20Space%20Official%20Launch"
              title="Save Event in my Calendar"
              target="_blank"
              rel="noreferrer"
            >
              <span className="d-none d-lg-inline-block">
                <b>Add to Calendar</b>
              </span>
              <i className={styles.icon}></i>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
