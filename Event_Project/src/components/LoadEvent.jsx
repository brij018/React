import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { load } from "../features/eventSlice";

const LoadEvent = () => {
  const loaded = useSelector((s) => s.events.load);
  return (
    <EventCard title="onLoad">
      {(dispatch) => (
        <div className="event-output-wrap">
          {loaded ? (
            <p className="demo-output">Image loaded successfully</p>
          ) : (
            <p className="demo-hint">Waiting for image to load...</p>
          )}
          <img
            className="demo-img"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80'%3E%3Crect width='120' height='80' fill='%236366f1'/%3E%3Ctext x='60' y='45' fill='white' font-family='sans-serif' font-size='12' text-anchor='middle'%3ELoaded%3C/text%3E%3C/svg%3E"
            alt="load demo"
            onLoad={() => dispatch(load())}
          />
        </div>
      )}
    </EventCard>
  );
};

export default LoadEvent;