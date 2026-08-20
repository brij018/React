import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { cut } from "../features/eventSlice";

const CutEvent = () => {
  const count = useSelector((s) => s.events.cut);
  return (
    <EventCard title="onCut">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">
            Cut {count} time{count === 1 ? "" : "s"}
          </p>
          <p className="demo-text" onCut={() => dispatch(cut())}>
            Select this text and cut it (Ctrl+X)
          </p>
        </div>
      )}
    </EventCard>
  );
};

export default CutEvent;