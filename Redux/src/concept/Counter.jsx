import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
  incrementByNumber,
} from "../features/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [input, setInput] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <br />
      <br />
      <button onClick={() => dispatch(increment())}>+1</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>-1</button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>reset</button>
      <br />
      <br />
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByNumber(Number(input)))}>
        Add
      </button>
    </>
  );
};

export default Counter;
