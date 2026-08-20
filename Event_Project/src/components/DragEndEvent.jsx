import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { dragEnd } from "../features/eventSlice";

const DragEndEvent = () => {
  const count = useSelector((s) => s.events.dragEnd);
  return (
    <EventCard title="onDragEnd">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Drag ended {count} time{count === 1 ? "" : "s"}
          </p>
          <div
            className="demo-box draggable"
            draggable
            onDragEnd={() => dispatch(dragEnd())}
          >
            Drag and release me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default DragEndEvent;