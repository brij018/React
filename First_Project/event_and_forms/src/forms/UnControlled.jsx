import React from "react";
import { useRef } from "react";

const UnControlled = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = inputRef.current.value;
    console.log("name: ", result);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="enter your name" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UnControlled;
