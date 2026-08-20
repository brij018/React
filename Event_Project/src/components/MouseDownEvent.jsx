import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { mouseDown } from "../features/eventSlice";

const BUTTONS = { 0: "Left", 1: "Middle", 2: "Right" };

const MouseDownEvent = () => {
  const button = useSelector((s) => s.events.mouseDown);
  return (
    <EventCard title="onMouseDown">
      {(dispatch) => (
        <div className="event-output-wrap">
          {button ? (
            <p className="demo-output">{button} button pressed down</p>
          ) : (
            <p className="demo-hint">Press a mouse button on the box</p>
          )}
          <div
            className="demo-box"
            onMouseDown={(e) => dispatch(mouseDown(BUTTONS[e.button]))}
          >
            Press and hold mouse button
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default MouseDownEvent;