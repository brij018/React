import React, { useState } from "react";

const Conditional_02 = () => {
  const [color, setColor] = useState("");

  let content;

  if (color === "blue") {
    content = <h1 style={{ color: "blue" }}>You have selected blue color</h1>;
  } else if (color === "red") {
    content = <h1 style={{ color: "red" }}>You have selected red color</h1>;
  } else if (color === "green") {
    content = <h1 style={{ color: "green" }}>You have selected green color</h1>;
  } else {
    content = <h1>You haven't selected proper color</h1>;
  }

  return (
    <>
      <button
        onClick={() => setColor("red")}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Red
      </button>
      <button
        onClick={() => setColor("blue")}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Blue
      </button>
      <button
        onClick={() => setColor("green")}
        style={{ backgroundColor: "green", color: "white" }}
      >
        Green
      </button>
      <h2>{content}</h2>
    </>
  );
};

export default Conditional_02;
