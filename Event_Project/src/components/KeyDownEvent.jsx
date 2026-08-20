import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { keyDown } from "../features/eventSlice";

const KeyDownEvent = () => {
  const lastKey = useSelector((s) => s.events.keyDown);
  return (
    <EventCard title="onKeyDown">
      {(dispatch) => (
        <div className="event-output-wrap">
          {lastKey ? (
            <p className="demo-output">Last key pressed down: {lastKey}</p>
          ) : (
            <p className="demo-hint">Press a key in the field</p>
          )}
          <input
            type="text"
            placeholder="Press any key..."
            onKeyDown={(e) => dispatch(keyDown(e.key))}
          />
        </div>
      )}
    </EventCard>
  );
};

export default KeyDownEvent;