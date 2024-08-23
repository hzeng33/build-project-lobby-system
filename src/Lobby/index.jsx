import "./style.css";
import UserPanel from "./UserPanel.jsx";
import EventPreview from "./EventPreview.jsx";
import { useState, useCallback } from "react";
import useAuth from "../Auth/useAuth.js";
const EVENT_INIT_OBJECT = {};

export default function Lobby() {
  const username = useAuth();
  const [events, setEvents] = useState([]);
  const [eventType, setEventType] = useState("Tic-Tac-Toe");

  const genNewEvent = (restEventData) => {
    return {
      ...EVENT_INIT_OBJECT,
      id: `${new Date().getTime()}_event`,
      ...restEventData,
    };
  };

  const createEvent = () => {
    setEvents((events) => [
      ...events,
      genNewEvent({ type: eventType, player: [username] }),
    ]);
  };

  return (
    <div className="lobby-container">
      <div className="lobby-main">
        <UserPanel createEvent={createEvent} setEventType={setEventType} />
        <EventPreview events={events} />
      </div>
    </div>
  );
}
