import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { keyPress } from "../features/eventSlice";

const KeyPressEvent = () => {
  const lastKey = useSelector((s) => s.events.keyPress);
  return (
    <EventCard title="onKeyPress">
      {(dispatch) => (
        <div className="event-output-wrap">
          {lastKey ? (
            <p className="demo-output">Last character typed: {lastKey}</p>
          ) : (
            <p className="demo-hint">Type a character in the field</p>
          )}
          <input
            type="text"
            placeholder="Type a character..."
            onKeyPress={(e) => dispatch(keyPress(e.key))}
          />
        </div>
      )}
    </EventCard>
  );
};

export default KeyPressEvent;