import { useState } from "react";

// function State() {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>increase value</button>
//     </>
//   );
// }

//to print the input text immediately

function State() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter any text"
      />
      <h2>you typed {name}</h2>
    </>
  );
}

export default State;
