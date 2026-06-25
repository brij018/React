import { useState } from "react";

const OnChange = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>you entered "{input}"</p>
    </>
  );
};

export default OnChange;
