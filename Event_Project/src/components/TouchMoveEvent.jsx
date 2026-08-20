import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { touchMove } from "../features/eventSlice";

const TouchMoveEvent = () => {
  const coords = useSelector((s) => s.events.touchMove);
  return (
    <EventCard title="onTouchMove">
      {(dispatch) => (
        <div className="event-output-wrap">
          {coords ? (
            <p className="demo-output">
              Touch at ({coords.x}, {coords.y})
            </p>
          ) : (
            <p className="demo-hint">Slide your finger across the box</p>
          )}
          <div
            className="demo-box touch-zone"
            onTouchMove={(e) =>
              dispatch(
                touchMove({
                  x: e.touches[0]?.clientX,
                  y: e.touches[0]?.clientY,
                }),
              )
            }
          >
            Slide your finger across me (on a touch device)
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default TouchMoveEvent;