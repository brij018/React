import React, { useRef } from "react";

const OnClick_01 = () => {
  const inputRef = useRef(null);

  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter your name" />
      <button onClick={() => alert(inputRef.current.value)}>
        alert button
      </button>
    </>
  );
};

export default OnClick_01;
