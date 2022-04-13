import React, { useRef, useState } from 'react';

const Subscribe = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div id="mc_embed_signup">
      <form onSubmit={subscribe} className="validate" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
            <input
              id="mce-EMAIL"
              name="EMAIL"
              placeholder="Enter your e-mail to subscribe for Updates"
              ref={inputEl}
              type="email"
            />
          </div>
          {message && <div className="clear foot" id="mce-responses">
            <div className="response" id="mce-error-response">{message}</div>
          </div>}
          <div className="optionalParent">
            <div className="clear foot">
              <input className="button" id="mc-embedded-subscribe" type="submit" value="Submit" name="subscribe" /><span className="icon"></span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;