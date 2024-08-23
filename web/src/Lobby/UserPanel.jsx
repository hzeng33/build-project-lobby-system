import useAuth from "../Auth/useAuth";

export default function UserPanel({ createEvent, setEventType }) {
  const username = useAuth();
  return (
    <div style={{ padding: "1em" }}>
      <h1>User Info</h1>
      <h1 style={{ fontSize: "2rem" }}>{username}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <h3>Event</h3>
        <select
          onChange={(e) => {
            setEventType(e.target.value);
          }}
        >
          <option value={"Tic-Tac-Toe"}>Tic-Tac-Toe</option>
          <option>Other Event 1</option>
          <option>Other Event 2</option>
        </select>
        <button onClick={createEvent}>Create</button>
      </div>
    </div>
  );
}
