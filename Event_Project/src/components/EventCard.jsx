import { useDispatch } from "react-redux";

const EventCard = ({ title, children }) => {
  const dispatch = useDispatch();
  return (
    <div className="event-card">
      <h2>{title}</h2>
      <div className="event-demo">
        {typeof children === "function" ? children(dispatch) : children}
      </div>
    </div>
  );
};

export default EventCard;