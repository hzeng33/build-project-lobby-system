import { useNavigate } from "react-router-dom";
import "./style.css";
import UserPanel from "./UserPanel.jsx";
import EventPreview from "./EventPreview.jsx";

export default function Lobby() {
  const nagvigate = useNavigate();

  return (
    <div className="lobby-container">
      {/* Lobby{" "}
      <button
        onClick={() => {
          nagvigate("/newSession");
        }}
      >
        Take me to the game
      </button> */}
      <nav>Welcome!</nav>
      <div className="lobby-main">
        <UserPanel />
        <EventPreview />
      </div>
    </div>
  );
}
