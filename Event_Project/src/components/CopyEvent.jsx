import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { copy } from "../features/eventSlice";

const CopyEvent = () => {
  const count = useSelector((s) => s.events.copy);
  return (
    <EventCard title="onCopy">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Copied {count} time{count === 1 ? "" : "s"}
          </p>
          <p className="demo-text" onCopy={() => dispatch(copy())}>
            Select and copy this text (Ctrl+C)
          </p>
        </div>
      )}
    </EventCard>
  );
};

export default CopyEvent;