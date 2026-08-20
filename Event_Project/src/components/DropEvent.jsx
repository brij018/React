import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { drop } from "../features/eventSlice";

const DropEvent = () => {
  const lastDrop = useSelector((s) => s.events.drop);
  return (
    <EventCard title="onDrop">
      {(dispatch) => (
        <div className="event-output-wrap">
          {lastDrop ? (
            <p className="demo-output">Dropped: {lastDrop}</p>
          ) : (
            <p className="demo-hint">Drag something here and drop it</p>
          )}
          <div
            className="demo-box drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              dispatch(drop(e.dataTransfer.getData("text") || "unknown"));
            }}
          >
            Drop something here
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default DropEvent;