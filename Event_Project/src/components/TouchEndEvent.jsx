import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { touchEnd } from "../features/eventSlice";

const TouchEndEvent = () => {
  const count = useSelector((s) => s.events.touchEnd);
  return (
    <EventCard title="onTouchEnd">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Touch ended {count} time{count === 1 ? "" : "s"}
          </p>
          <div
            className="demo-box touch-zone"
            onTouchEnd={() => dispatch(touchEnd())}
          >
            Touch and release me (on a touch device)
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default TouchEndEvent;