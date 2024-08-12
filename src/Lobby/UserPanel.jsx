import "./style.css";

export default function UserPanel({ createEvent, setEventType }) {
  return (
    <div>
      <h1>User Info</h1>
      <h2>Hannah Zeng</h2>
      <div className="event-content">
        <h3>Events</h3>
        <select
          onChange={(e) => {
            setEventType(e.target.value);
          }}
        >
          <option value={"Tic Tac Toe"}>Tic Tac Toe</option>
          <option>Other Event 1</option>
          <option>Other Event 2</option>
        </select>
        <button onClick={createEvent}>Create</button>
      </div>
    </div>
  );
}
