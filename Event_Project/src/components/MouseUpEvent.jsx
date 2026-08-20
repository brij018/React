import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { mouseUp } from "../features/eventSlice";

const BUTTONS = { 0: "Left", 1: "Middle", 2: "Right" };

const MouseUpEvent = () => {
  const button = useSelector((s) => s.events.mouseUp);
  return (
    <EventCard title="onMouseUp">
      {(dispatch) => (
        <div className="event-output-wrap">
          {button ? (
            <p className="demo-output">{button} button released</p>
          ) : (
            <p className="demo-hint">Release a mouse button on the box</p>
          )}
          <div
            className="demo-box"
            onMouseUp={(e) => dispatch(mouseUp(BUTTONS[e.button]))}
          >
            Press and release mouse button
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default MouseUpEvent;