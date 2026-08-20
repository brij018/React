import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { mouseEnter } from "../features/eventSlice";

const MouseEnterEvent = () => {
  const count = useSelector((s) => s.events.mouseEnter);
  return (
    <EventCard title="onMouseEnter">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Mouse entered {count} time{count === 1 ? "" : "s"}
          </p>
          <div className="demo-box" onMouseEnter={() => dispatch(mouseEnter())}>
            Hover over me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default MouseEnterEvent;