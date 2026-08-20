import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { click } from "../features/eventSlice";

const ClickEvent = () => {
  const count = useSelector((s) => s.events.click);
  return (
    <EventCard title="onClick">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Clicked {count} time{count === 1 ? "" : "s"}
          </p>
          <button onClick={() => dispatch(click())}>Click Me</button>
        </div>
      )}
    </EventCard>
  );
};

export default ClickEvent;