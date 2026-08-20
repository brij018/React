import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { doubleClick } from "../features/eventSlice";

const DoubleClickEvent = () => {
  const count = useSelector((s) => s.events.doubleClick);
  return (
    <EventCard title="onDoubleClick">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Double clicked {count} time{count === 1 ? "" : "s"}
          </p>
          <button onDoubleClick={() => dispatch(doubleClick())}>
            Double Click Me
          </button>
        </div>
      )}
    </EventCard>
  );
};

export default DoubleClickEvent;