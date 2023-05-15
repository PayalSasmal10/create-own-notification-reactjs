import "./App.css";
import { NotificationContextAPI } from "./components/NotificationContextAPI";
import NotificationAdd  from "./components/NotificationAdd";
import Notification from "./components/Notification";


export default function App() {
  
  return (
    <div className="App">
      <NotificationContextAPI>
        <NotificationAdd/>
        <Notification />
      </NotificationContextAPI>
    </div>
  );
}
