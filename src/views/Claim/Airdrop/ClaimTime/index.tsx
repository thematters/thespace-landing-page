import classNames from "classnames";
import styles from "./styles.module.sass";

type ClaimTimeProps = {
  isStarted: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const ClaimTime: React.FC<ClaimTimeProps> = ({
  isStarted,
  days,
  hours,
  minutes,
  seconds,
}) => {
  const classes = classNames({
    [styles.claim_time]: true,
    "d-flex flex-column flex-lg-row justify-content-between align-items-start":
      true,
  });

  return (
    <div className={classes}>
      <span className={styles.claim_time_date}>
        Claim Time: May 11, 2022 - May 15, 2022
      </span>

      {!isStarted && (days || hours || minutes || seconds) ? (
        <span className={styles.claim_time_countdown}>
          {days} Days {hours} hours {minutes} min {seconds} sec
        </span>
      ) : null}
    </div>
  );
};

export default ClaimTime;
