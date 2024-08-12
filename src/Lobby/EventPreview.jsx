import "./style.css";
import { useNavigate } from "react-router-dom";

function RectPreview({ event }) {
  const navigate = useNavigate();
  const onJoinEvent = () => {
    navigate("/tic-tac-toe");
  };

  return (
    <div className="preview" onClick={onJoinEvent}>
      <div className="event-title">Tic Tac Toe</div>
      <user>User #</user>
      <use>Tester</use>
    </div>
  );
}

export default function EventPreview({ events }) {
  return (
    <div className="preview-container">
      {events.map((event, idx) => (
        <RectPreview key={`preview-${idx}`} event={event} />
      ))}
    </div>
  );
}
