import React, { useContext, useState } from "react";
import "./Notification.css";
import { contextApi } from "./NotificationContextAPI";

const Notification = () => {
  const { notifications, removeNotification } = useContext(contextApi);

//   const closeButtonHandler = () => {
//     setNotificationSent(false);
//   }; 
    console.log(notifications);
    console.log(removeNotification);
  return (
    <div className="outer">
      {notifications.map((notification) => (
        <div key={notification.id} className="message">
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>X</button>
        </div>
      ))}
    </div>
  );
};
export default Notification;
