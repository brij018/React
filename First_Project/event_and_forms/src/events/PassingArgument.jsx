import React from "react";

const PassingArgument = ({ name }) => {
  const handleClick = (name) => {
    alert(`hii there, ${name}!!`);
  };
  return (
    <>
      <button onClick={() => handleClick(name)}>click</button>
    </>
  );
};

export default PassingArgument;
