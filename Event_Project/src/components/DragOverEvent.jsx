import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { dragOver } from "../features/eventSlice";

const DragOverEvent = () => {
  const count = useSelector((s) => s.events.dragOver);
  return (
    <EventCard title="onDragOver">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Dragged over {count} time{count === 1 ? "" : "s"}
          </p>
          <div
            className="demo-box drop-zone"
            onDragOver={(e) => {
              e.preventDefault();
              dispatch(dragOver());
            }}
          >
            Drag something over me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default DragOverEvent;