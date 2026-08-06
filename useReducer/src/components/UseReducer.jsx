import React, { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }
    default: {
      console.log("invalid operation");
    }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <>
      <h1>Counter value: {state.counter}</h1>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
    </>
  );
};

export default Counter;
