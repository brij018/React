import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { dragStart } from "../features/eventSlice";

const DragStartEvent = () => {
  const count = useSelector((s) => s.events.dragStart);
  return (
    <EventCard title="onDragStart">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Drag started {count} time{count === 1 ? "" : "s"}
          </p>
          <div
            className="demo-box draggable"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("text/plain", "Hello from drag!");
              dispatch(dragStart());
            }}
          >
            Drag me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default DragStartEvent;