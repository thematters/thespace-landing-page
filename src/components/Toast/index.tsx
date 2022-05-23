import classNames from "classnames";

import styles from "./styles.module.sass";

export interface AirdropProps {
  status: "success" | "failed";
  reason?: string;
}

const Toast = ({ status, reason }: AirdropProps) => {
  const toastClasses = classNames({
    [styles.toast]: true,
    [styles[`${status}`]]: status,
    "d-flex": true,
    "justify-content-center": true,
    "align-items-center": true,
  });

  return (
    <div className={toastClasses}>
      {status === "success" && (
        <>
          <span>{reason || "Claim successfully 🎉"}</span>
        </>
      )}
      {status === "failed" && (
        <>
          <span>
            {reason ||
              "Claim failed. Please check wallet settings or try it later."}
          </span>
        </>
      )}
    </div>
  );
};

export default Toast;
