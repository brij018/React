import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { mouseLeave } from "../features/eventSlice";

const MouseLeaveEvent = () => {
  const count = useSelector((s) => s.events.mouseLeave);
  return (
    <EventCard title="onMouseLeave">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Mouse left {count} time{count === 1 ? "" : "s"}
          </p>
          <div className="demo-box" onMouseLeave={() => dispatch(mouseLeave())}>
            Move your mouse away
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default MouseLeaveEvent;