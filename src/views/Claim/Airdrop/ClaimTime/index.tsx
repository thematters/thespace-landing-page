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

  const start = new Date(
    process.env.NEXT_PUBLIC_CLAIM_START_AT || 0
  ).toLocaleString();
  const end = new Date(
    process.env.NEXT_PUBLIC_CLAIM_END_AT || 0
  ).toLocaleString();

  return (
    <div className={classes}>
      <span className={styles.claim_time_date}>
        Claim Time: {start} - {end}
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
