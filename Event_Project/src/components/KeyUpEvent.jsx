import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { keyUp } from "../features/eventSlice";

const KeyUpEvent = () => {
  const lastKey = useSelector((s) => s.events.keyUp);
  return (
    <EventCard title="onKeyUp">
      {(dispatch) => (
        <div className="event-output-wrap">
          {lastKey ? (
            <p className="demo-output">Last key released: {lastKey}</p>
          ) : (
            <p className="demo-hint">Press and release a key</p>
          )}
          <input
            type="text"
            placeholder="Press and release a key..."
            onKeyUp={(e) => dispatch(keyUp(e.key))}
          />
        </div>
      )}
    </EventCard>
  );
};

export default KeyUpEvent;