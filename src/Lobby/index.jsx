import "./style.css";
import UserPanel from "./UserPanel.jsx";
import EventPreview from "./EventPreview.jsx";
import { useState } from "react";
const EVENT_INIT_OBJECT = {};

export default function Lobby() {
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState(null);

  const genNewEvent = (restEventData) => {
    return {
      ...EVENT_INIT_OBJECT,
      id: `${new Date().getTime()}_event`,
      ...restEventData,
    };
  };

  const createEvent = () => {
    setEvents((events) => [...events, genNewEvent({ type: eventType })]);
  };

  return (
    <div className="lobby-container">
      <nav>Welcome!</nav>
      <div className="lobby-main">
        <UserPanel createEvent={createEvent} setEventType={setEventType} />
        <EventPreview events={events} />
      </div>
    </div>
  );
}
