import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "./EventCard";
import {
  change,
  input,
  submit,
  focus,
  blur,
  select,
} from "../features/eventSlice";

const FormEvents = () => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.events);
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <section className="events-section">
      <h1>Form Related Events</h1>
      <div className="events-grid">
        <EventCard title="onChange">
          <div className="event-output-wrap">
            {state.change ? (
              <p className="demo-output">You typed: {state.change}</p>
            ) : (
              <p className="demo-hint">Output will appear above</p>
            )}
            <input
              type="text"
              placeholder="Type to change..."
              onChange={(e) => dispatch(change(e.target.value))}
            />
          </div>
        </EventCard>

        <EventCard title="onInput">
          <div className="event-output-wrap">
            {state.input ? (
              <p className="demo-output">Live input: {state.input}</p>
            ) : (
              <p className="demo-hint">Output will appear above</p>
            )}
            <input
              type="text"
              placeholder="Type here..."
              onInput={(e) => dispatch(input(e.target.value))}
            />
          </div>
        </EventCard>

        <EventCard title="onSubmit">
          <div className="event-output-wrap">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(submit({ ...formData }));
              }}
            >
              <input
                type="text"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email..."
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <button type="submit">Submit</button>
            </form>
            {state.submit ? (
              <div className="demo-success">
                <p>Submission successful!</p>
                <p>Name: {state.submit.name}</p>
                <p>Email: {state.submit.email}</p>
              </div>
            ) : (
              <p className="demo-hint">Fill the form and press Submit</p>
            )}
          </div>
        </EventCard>

        <EventCard title="onFocus">
          <div className="event-output-wrap">
            <p className="demo-output">
              Focused {state.focus} time{state.focus === 1 ? "" : "s"}
            </p>
            <input
              type="text"
              placeholder="Click to focus..."
              onFocus={() => dispatch(focus())}
            />
          </div>
        </EventCard>

        <EventCard title="onBlur">
          <div className="event-output-wrap">
            <p className="demo-output">
              Blurred {state.blur} time{state.blur === 1 ? "" : "s"}
            </p>
            <input
              type="text"
              placeholder="Focus then click outside..."
              onBlur={() => dispatch(blur())}
            />
          </div>
        </EventCard>

        <EventCard title="onSelect">
          <div className="event-output-wrap">
            {state.select ? (
              <p className="demo-output">Selected text: {state.select}</p>
            ) : (
              <p className="demo-hint">Select some text below</p>
            )}
            <input
              type="text"
              defaultValue="Select this text"
              onSelect={(e) =>
                dispatch(
                  select(
                    e.target.value.substring(
                      e.target.selectionStart,
                      e.target.selectionEnd,
                    ),
                  ),
                )
              }
            />
          </div>
        </EventCard>
      </div>
    </section>
  );
};

export default FormEvents;