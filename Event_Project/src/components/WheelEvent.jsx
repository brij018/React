import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { wheel } from "../features/eventSlice";

const WheelEvent = () => {
  const delta = useSelector((s) => s.events.wheel);
  return (
    <EventCard title="onWheel">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Wheel delta: {delta > 0 ? "down" : delta < 0 ? "up" : "..."}
            {delta !== 0 ? ` (${Math.round(delta)})` : ""}
          </p>
          <div
            className="demo-box"
            onWheel={(e) => dispatch(wheel(e.deltaY))}
          >
            Scroll your mouse wheel over me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default WheelEvent;