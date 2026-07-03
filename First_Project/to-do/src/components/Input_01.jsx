import todo from "../maintodo.module.css";
import { useState } from "react";

const Input_01 = ({ addToList, editInput, saveTask, setEditInput }) => {
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
      {editInput && (
        <form onSubmit={saveTask}>
          <label htmlFor="">Task:</label>
          <input
            type="text"
            value={editInput.task}
            onChange={(e) => {
              setEditInput({ ...editInput, task: e.target.value });
            }}
          />
          <label htmlFor="">Description:</label>
          <input
            type="text"
            value={editInput.description}
            onChange={(e) => {
              setEditInput({ ...editInput, description: e.target.value });
            }}
          />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
      )}
      {!editInput && (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="" name="task">
            Task:
          </label>
          <input
            type="text"
            name="task"
            value={input.task}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="" name="description">
            Description:
          </label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />
          <button type="submit">Add</button>
        </form>
      )}
    </>
  );
};

export default Input_01;
