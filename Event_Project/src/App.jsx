import React from "react";
import FormEvents from "./components/FormEvents";
import ClickEvent from "./components/ClickEvent";
import DoubleClickEvent from "./components/DoubleClickEvent";
import ContextMenuEvent from "./components/ContextMenuEvent";
import KeyDownEvent from "./components/KeyDownEvent";
import KeyUpEvent from "./components/KeyUpEvent";
import KeyPressEvent from "./components/KeyPressEvent";
import MouseEnterEvent from "./components/MouseEnterEvent";
import MouseLeaveEvent from "./components/MouseLeaveEvent";
import MouseDownEvent from "./components/MouseDownEvent";
import MouseUpEvent from "./components/MouseUpEvent";
import MouseMoveEvent from "./components/MouseMoveEvent";
import ScrollEvent from "./components/ScrollEvent";
import CopyEvent from "./components/CopyEvent";
import CutEvent from "./components/CutEvent";
import PasteEvent from "./components/PasteEvent";
import DragStartEvent from "./components/DragStartEvent";
import DragOverEvent from "./components/DragOverEvent";
import DropEvent from "./components/DropEvent";
import DragEndEvent from "./components/DragEndEvent";
import TouchStartEvent from "./components/TouchStartEvent";
import TouchEndEvent from "./components/TouchEndEvent";
import TouchMoveEvent from "./components/TouchMoveEvent";
import WheelEvent from "./components/WheelEvent";
import LoadEvent from "./components/LoadEvent";
import ErrorEvent from "./components/ErrorEvent";
import ResizeEvent from "./components/ResizeEvent";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Events</h1>
        <p>Every event in React with a live example block</p>
      </header>

      <FormEvents />

      <section className="events-section">
        <h1>Individual Events</h1>
        <div className="events-grid">
          <ClickEvent />
          <DoubleClickEvent />
          <ContextMenuEvent />
          <KeyDownEvent />
          <KeyUpEvent />
          <KeyPressEvent />
          <MouseEnterEvent />
          <MouseLeaveEvent />
          <MouseDownEvent />
          <MouseUpEvent />
          <MouseMoveEvent />
          <ScrollEvent />
          <CopyEvent />
          <CutEvent />
          <PasteEvent />
          <DragStartEvent />
          <DragOverEvent />
          <DropEvent />
          <DragEndEvent />
          <TouchStartEvent />
          <TouchEndEvent />
          <TouchMoveEvent />
          <WheelEvent />
          <LoadEvent />
          <ErrorEvent />
          <ResizeEvent />
        </div>
      </section>
    </div>
  );
};

export default App;
