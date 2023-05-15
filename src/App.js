import "./App.css";
import { useState } from "react";
import Notification from "./components/Notification";

export default function App() {
  const [notificationsent, setNotificationSent] = useState(false);

  const notificationHandler = () => {
    setNotificationSent(true);
    // setTimeout(() => {
    //   setNotificationSent(false);
    // }, 5000);
  };
  return (
    <div className="App">
      <button onClick={notificationHandler}>Click</button>
      {notificationsent && (
        <Notification setNotificationSent={setNotificationSent} />
      )}
    </div>
  );
}
