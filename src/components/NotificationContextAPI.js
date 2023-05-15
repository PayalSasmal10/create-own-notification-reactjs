import { Children, createContext, useState } from "react";

export const contextApi = createContext();

export const NotificationContextAPI = ({ children }) => {
  const [notification, setNotification] = useState([]);

  const addNotification = (message) => {
    let timeStamp = Date.now();
    setNotification((prvNotification) => [...prvNotification, { id: timeStamp, message }]);
  };

  const removeNotification = (id) => {
    setTimeout(() => {
      setNotification((prvNotification) =>
        prvNotification.filter((notification) => notification.id !== id)
      );
    }, 5000);
  };

  return (
    <contextApi.Provider value={{ notification, addNotification, removeNotification }}>
      {children}
    </contextApi.Provider>
  );
};
