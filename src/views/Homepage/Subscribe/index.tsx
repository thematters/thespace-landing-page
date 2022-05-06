import React, { useRef, useState } from "react";

import styles from "./styles.module.sass";

const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef<HTMLInputElement>(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (event: any) => {
    event.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current?.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    if (inputEl.current) inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <div id={styles.mc_embed_signup}>
      <form
        onSubmit={subscribe}
        className={styles.validate}
        id={styles["mc-embedded-subscribe-form"]}
        name="mc-embedded-subscribe-form"
      >
        <div id={styles.mc_embed_signup_scroll}>
          <div className={styles["mc-field-group"]}>
            <label htmlFor="mce-EMAIL">
              Email Address <span className={styles.asterisk}>*</span>
            </label>
            <input
              id={styles["mce-EMAIL"]}
              name="EMAIL"
              placeholder="Enter your e-mail to subscribe for Updates"
              ref={inputEl}
              type="email"
            />
          </div>
          {message && (
            <div
              className={`${styles.clear} ${styles.foot}`}
              id={styles["mce-responses"]}
            >
              <div
                className={styles.response}
                id={styles["mce-error-response"]}
              >
                {message}
              </div>
            </div>
          )}
          <div className={styles.optionalParent}>
            <div className={`${styles.clear} ${styles.foot}`}>
              <input
                className={styles.button}
                id={styles["mc-embedded-subscribe"]}
                type="submit"
                value="Submit"
                name="subscribe"
              />
              <span className={styles.icon}></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
