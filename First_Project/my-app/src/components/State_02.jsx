// # React Functional State Update

// When updating state in React based on its previous value, use a functional update:

//
// setCount(prevCount => prevCount + 1);
//

// instead of:

//
// setCount(count + 1);
//

// ### Why?

// React state updates are asynchronous and may be batched together. Using `setCount(count + 1)` can result in React using an outdated value of `count`. The functional form always receives the latest state value.

// ### Example

//
// setCount(c => c + 1);
// setCount(c => c + 1);
// setCount(c => c + 1);
//

// Result: `count` increases by **3**.

//
// setCount(count + 1);
// setCount(count + 1);
// setCount(count + 1);
//

// Result: `count` increases by only **1** because all updates use the same current value.

// ### Rule of Thumb

// * Use `setState(value)` when setting a fixed value.
// * Use `setState(prev => ...)` when the new state depends on the previous state.

// This ensures state updates are accurate and prevents bugs caused by React's batching behavior.

import { useState } from "react";

function State02() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={handleClick}>Increase the counter by 3</button>
    </>
  );
}

export default State02;
