import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { error } from "../features/eventSlice";

const ErrorEvent = () => {
  const hasError = useSelector((s) => s.events.error);
  return (
    <EventCard title="onError">
      {(dispatch) => (
        <div className="event-output-wrap">
          {hasError ? (
            <p className="demo-output">Image failed to load</p>
          ) : (
            <p className="demo-hint">Waiting for image to fail...</p>
          )}
          <img
            className="demo-img"
            src="this-image-does-not-exist.jpg"
            alt="broken"
            onError={() => dispatch(error())}
          />
        </div>
      )}
    </EventCard>
  );
};

export default ErrorEvent;