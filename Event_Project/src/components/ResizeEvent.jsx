import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";
import { resize } from "../features/eventSlice";

const ResizeEvent = () => {
  const dispatch = useDispatch();
  const size = useSelector((s) => s.events.resize);

  useEffect(() => {
    const handleResize = () =>
      dispatch(
        resize({ width: window.innerWidth, height: window.innerHeight }),
      );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return (
    <EventCard title="onResize (window)">
      <div className="event-output-wrap">
        {size ? (
          <p className="demo-output">
            Window size: {size.width} x {size.height}
          </p>
        ) : (
          <p className="demo-hint">Resize the browser window</p>
        )}
      </div>
    </EventCard>
  );
};

export default ResizeEvent;