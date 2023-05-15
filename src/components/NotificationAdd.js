import { useContext } from "react";
import { contextApi } from "./NotificationContextAPI";

const NotificationAdd = () => {
  const { addNotification } = useContext(contextApi);

  const notificationHandler = () => {
    // setNotificationSent(true);
    setTimeout(() => {
      addNotification("Notification Sent");
    }, 5000);
  };

  return (
    <div>
      <button onClick={notificationHandler}>Click</button>
    </div>
  );
};

export default NotificationAdd;