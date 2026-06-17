import React from "react";

function JSX() {
  //before jsx
  const element = React.createElement("h1", null, "This is without/before jsx");
  //after jsx
  const element2 = <h1>This is after jsx</h1>;

  return (
    <>
      {element}
      {element2}
      <h1>Hii from JSX</h1>
    </>
  );
}

export default JSX;
