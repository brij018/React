import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { contextMenu } from "../features/eventSlice";

const ContextMenuEvent = () => {
  const coords = useSelector((s) => s.events.contextMenu);
  return (
    <EventCard title="onContextMenu">
      {(dispatch) => (
        <div className="event-output-wrap">
          {coords ? (
            <p className="demo-output">
              Right-clicked at ({coords.x}, {coords.y})
            </p>
          ) : (
            <p className="demo-hint">Right click the box below</p>
          )}
          <div
            className="demo-box"
            onContextMenu={(e) => {
              e.preventDefault();
              dispatch(contextMenu({ x: e.clientX, y: e.clientY }));
            }}
          >
            Right click here
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default ContextMenuEvent;