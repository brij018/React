import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { touchStart } from "../features/eventSlice";

const TouchStartEvent = () => {
  const count = useSelector((s) => s.events.touchStart);
  return (
    <EventCard title="onTouchStart">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Touch started {count} time{count === 1 ? "" : "s"}
          </p>
          <div
            className="demo-box touch-zone"
            onTouchStart={() => dispatch(touchStart())}
          >
            Touch me (on a touch device)
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default TouchStartEvent;