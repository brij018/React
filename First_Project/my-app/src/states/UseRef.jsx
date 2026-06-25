/*
=========================================
useRef() Hook - React Short Note
=========================================

useRef() is a React Hook that creates a mutable reference
which persists across component re-renders without causing
the component to re-render when its value changes.

Syntax:
const ref = useRef(initialValue);

Access Value:
ref.current

Common Uses:
1. Accessing DOM elements
2. Storing mutable values (timers, previous values, counters)
3. Keeping data between renders without re-rendering

Example (Access DOM):
const inputRef = useRef();

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>
    Focus
</button>

Example (Store Value):
const countRef = useRef(0);

const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
};

Key Points:
- useRef() returns an object with a .current property.
- Changing ref.current DOES NOT re-render the component.
- The value persists between renders.
- Useful for DOM manipulation and storing mutable data.

useRef() vs useState()

useRef()
✔ No re-render when value changes.
✔ Used for DOM access and mutable values.
✔ Value is stored in ref.current.

useState()
✔ Re-renders component when value changes.
✔ Used for data displayed in the UI.
✔ Updates using setState().

Think of it as:
useState -> Changes UI
useRef   -> Stores values without updating UI
*/

import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();

    inputRef.current.value;
    console.log("input value", inputRef);
  };

  console.log("this will not be rendered");

  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter your name" />
      <br />
      <br />
      <button onClick={handleFocus}>focus</button>
    </>
  );
};

export default UseRef;
