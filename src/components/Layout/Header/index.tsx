import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import classNames from "classnames";

import { useCountdown } from "~/hooks";

import styles from "./styles.module.sass";

const Header = () => {
  const [isActive, setActive] = useState(false)
  const [isStarted, setIsStarted] = useState(false);
  
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
  
  // const endDate = new Date("2022-05-31T12:00:00Z").toString()
  const { days, hours, minutes, seconds } = useCountdown({
    end: process.env.NEXT_PUBLIC_CLAIM_START_AT || "",
    onEnd: () => setIsStarted(true),
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
        <a
          href="https://www.notion.so/matterslab/The-Space-Wiki-6f669a7af5894830aadd70685482b114"
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
      {!isStarted && <div className={`${styles.countdown} d-flex justify-content-between align-items-center`}>
        <div className={`${styles.time}`}>
          <div className="d-flex justify-content-between align-items-center">
            <i className={styles.icon}></i>
            <span>
              <b className="d-none d-lg-inline-block">The Space Official Launch in</b> <b>{days}</b> days <b>{hours}</b> hours <b>{minutes}</b> mins <b>{seconds}</b> sec
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
            <span className="d-none d-lg-inline-block"><b>Add to Calendar</b></span>
            <i className={styles.icon}></i>
          </a>
        </div>
      </div>}
    </header>
  );
};

export default Header;
