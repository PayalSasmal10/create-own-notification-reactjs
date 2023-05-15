import React, { useContext, useState } from "react";
import "./Notification.css";
import { contextApi } from "./NotificationContextAPI";

const Notification = () => {
  const { notification, removeNotification } = useContext(contextApi);

//   const closeButtonHandler = () => {
//     setNotificationSent(false);
//   };
    console.log(notification);
    console.log(removeNotification);
  return (
    <div className="outer">
      {notification.map((notification) => (
        <div key={notification.id} className="message">
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>X</button>
        </div>
      ))}
    </div>
  );
};
export default Notification;
