import todo from "../maintodo.module.css";
import { useState } from "react";

const Input_01 = ({ addToList }) => {
  const [input, setInput] = useState({
    id: "",
    task: "",
    description: "",
    status: "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    addToList(input);

    setInput({
      id: "",
      task: "",
      description: "",
      status: "pending",
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={input.task}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Input_01;
