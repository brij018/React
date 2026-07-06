import React from "react";
import { useState } from "react";

const Input = ({ addToList, editInput, setEditInput, saveTask }) => {
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
      {!editInput && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Task:</label>
          <input
            type="text"
            value={input.task}
            name="task"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor="">Description:</label>
          <input
            type="text"
            value={input.description}
            name="description"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <button type="submit">ADD</button>
        </form>
      )}
      {editInput && (
        <form action="" onSubmit={saveTask}>
          <label htmlFor="">Task:</label>
          <input
            type="text"
            value={editInput.task}
            name="task"
            onChange={(prev, e) =>
              setEditInput({ ...prev, task: e.target.value })
            }
          />
          <label htmlFor="">Description:</label>
          <input
            type="text"
            value={editInput.description}
            name="description"
            onChange={(prev, e) =>
              setEditInput({ ...prev, task: e.target.value })
            }
          />
          <button type="submit">ADD</button>
        </form>
      )}
    </>
  );
};

export default Input;
