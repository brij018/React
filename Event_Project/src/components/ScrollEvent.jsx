import { useSelector } from "react-redux";
import EventCard from "./EventCard";
import { scroll } from "../features/eventSlice";

const ScrollEvent = () => {
  const offset = useSelector((s) => s.events.scroll);
  return (
    <EventCard title="onScroll">
      {(dispatch) => (
        <div className="event-output-wrap">
          <p className="demo-output">Scrolled to {offset}px</p>
          <div
            className="demo-box scroll-box"
            onScroll={(e) => dispatch(scroll(Math.round(e.target.scrollTop)))}
          >
            <p>
              Scroll down here to trigger the onScroll event. Keep scrolling to
              see the offset update above.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      )}
    </EventCard>
  );
};

export default ScrollEvent;