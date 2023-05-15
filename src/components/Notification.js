import React, { useState } from "react";
import "./Notification.css";

const Notification = ({ setNotificationSent }) => {
  const closeButtonHandler = () => {
    setNotificationSent(false);
  };

  return (
    <div className="outer">
      <div className="message">
        <p>Notification sent</p>
      </div>
      <div className="close">
        <button onClick={closeButtonHandler}>X</button>
      </div>
    </div>
  );
};
export default Notification;
