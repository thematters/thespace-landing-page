import styles from "./styles.module.sass";

const Subscribe = () => {
  return (
    <section className={styles.subscribe} id="subscribe">
      <div className="container d-flex flex-column align-items-center">
        <div className={`${styles.title} text-center`}>
          <h2>Subscribe for Updates</h2>
          <span>Get the latest news about our progress!</span>
        </div>
        <div className={styles.form}>
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form
            action="https://app.convertkit.com/forms/3264120/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="3264120"
            data-uid="4a7d3cc50d"
            data-format="inline"
            data-version="5"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! 🎉 You are now subscribed to the newsletter.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
            min-width="400"
          >
            <div data-style="clean">
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              ></ul>
              <div
                data-element="fields"
                data-stacked="false"
                className="seva-fields formkit-fields"
              >
                <div className={styles["formkit-field"]}>
                  <label>Email *</label>
                  <input
                    className="formkit-input"
                    name="email_address"
                    aria-label="Email *"
                    placeholder="Enter your email"
                    required
                    type="email"
                  />
                </div>
                <div className={styles["formkit-field"]}>
                  <label>ETH Address</label>
                  <input
                    className="formkit-input"
                    aria-label="ETH Address"
                    name="fields[first_name]"
                    placeholder="Enter your ETH Address"
                    type="text"
                  />
                </div>
                <div className="text-end">
                  <button
                    data-element="submit"
                    className={styles["formkit-submit"]}
                  >
                    {/* <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div> */}
                    <span className={styles.text}>Submit</span>
                    <span className={styles.icon}></span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
