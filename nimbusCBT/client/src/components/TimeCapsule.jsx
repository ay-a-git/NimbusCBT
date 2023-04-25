import React, { useState } from "react";

function TimeCapsule() {
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  function sendMessage() {
    const now = new Date().getTime();
    const selectedDate = new Date(date).getTime();
    const timeDelay = selectedDate - now;
    if (timeDelay <= 0) {
      console.error("Chose a later date/time in the future");
      return;
    }

    setTimeout(() => {
      console.log(message);
    }, timeDelay);
  }

  return (
    <>
      <div>TimeCapsule</div>
      <div>
        <label htmlFor="message-input">Message: </label>
        <input
          id="message-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <label htmlFor="date-input">Date and time: </label>
        <input
          id="date-input"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </>
  );
}

export default TimeCapsule;
