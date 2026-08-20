import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { paste } from "../features/eventSlice";

const PasteEvent = () => {
  const lastPaste = useSelector((s) => s.events.paste);
  return (
    <EventCard title="onPaste">
      {(dispatch) => (
        <div className="event-output-wrap">
          {lastPaste ? (
            <p className="demo-output">Last pasted: {lastPaste}</p>
          ) : (
            <p className="demo-hint">Paste something into the field</p>
          )}
          <input
            type="text"
            placeholder="Paste something here (Ctrl+V)"
            onPaste={(e) =>
              dispatch(paste(e.clipboardData.getData("text")))
            }
          />
        </div>
      )}
    </EventCard>
  );
};

export default PasteEvent;