import { useContext } from "react";
import { contextApi } from "./NotificationContextAPI";

const NotificationAdd = () => {
  const { notifications, addNotification } = useContext(contextApi);

  const notificationHandler = () => {
    // setNotificationSent(true);
    // setTimeout(() => {
      addNotification("Notification Sent");
    // }, 5000);
  };


  return (
    <div className="">
      {notifications.map((notification) => (
        <div key={notification.id} className="message">
          {/* <span>{notification.message}</span> */}
        </div>
      ))}
      <button onClick={notificationHandler}>Click</button>

    </div>
  );
};

export default NotificationAdd;