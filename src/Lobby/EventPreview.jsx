import "./style.css";

function RectPreview() {
  return (
    <div className="preview">
      <user>User #</user>
      <use>Tester</use>
    </div>
  );
}

export default function EventPreview() {
  const mockupEvents = new Array(20).fill(0);

  return (
    <div className="preview-container">
      {mockupEvents.map((event, idx) => {
        <RectPreview key={`preview-${idx}`} />;
      })}
    </div>
  );
}
