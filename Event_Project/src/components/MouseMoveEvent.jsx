import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { mouseMove } from "../features/eventSlice";

const MouseMoveEvent = () => {
  const coords = useSelector((s) => s.events.mouseMove);
  return (
    <EventCard title="onMouseMove">
      {(dispatch) => (
        <div className="event-output-wrap">
          {coords ? (
            <p className="demo-output">
              Mouse at ({coords.x}, {coords.y})
            </p>
          ) : (
            <p className="demo-hint">Move your mouse over the box</p>
          )}
          <div
            className="demo-box"
            onMouseMove={(e) =>
              dispatch(mouseMove({ x: e.clientX, y: e.clientY }))
            }
          >
            Move your mouse over me
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default MouseMoveEvent;