import { createContext, useState } from "react";

export const contextApi = createContext();

export const NotificationContextAPI = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    let timeStamp = Date.now();
    console.log("timeStamp", timeStamp);
    setNotifications((prvNotification) => [...prvNotification, { id: timeStamp, message }]);
    // console.log(notifications);
  };

  const removeNotification = (id) => {
    setTimeout(() => {
      setNotifications((prvNotification) =>
        prvNotification.filter((notification) => notification.id !== id)
      );
    }, 5000);
  };

  return (
    <contextApi.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </contextApi.Provider>
  );
};
