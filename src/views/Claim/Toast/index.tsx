import classNames from "classnames";

import styles from "./styles.module.sass";

export interface AirdropProps {
  status?: 'success' | 'failed'
}

const Toast = ({ status }: AirdropProps) => {

  const toastClasses = classNames({
    [styles.toast]: true,
    [styles[`${status}`]]: status,
    'd-flex': true,
    'justify-content-center': true,
    'align-items-center': true
  });

  return (
    <div className={toastClasses}>
      {status === 'success' &&
        <>
          <span>Claim successfully 🎉</span>
          <span className={styles.icon}></span>
        </>
      }
      {status === 'failed' &&
        <>
          <span>Claim failed. Please check wallet settings or try it later.</span>
          <span className={styles.icon}></span>
        </>
      }
    </div>
  );
};

export default Toast;