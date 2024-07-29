import "./style.css";

export default function UserPanel() {
  return (
    <div>
      <h1>User Info</h1>
      <h2>Hannah Zeng</h2>
      <div className="event-content">
        <h3>Events</h3>
        <select>
          <option>Tic Tac Toe</option>
          <option>Other Event 1</option>
          <option>Other Event 2</option>
        </select>
        <button>Create</button>
      </div>

      <div className="friend-list">
        <h3>Friend List</h3>
        <div></div>
      </div>
    </div>
  );
}
