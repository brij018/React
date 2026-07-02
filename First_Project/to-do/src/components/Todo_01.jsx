import { useState } from "react";
import todo from "./Todo.module.css";

const Todo_01 = () => {
  const [input, setInput] = useState({
    id: "",
    task: "",
    description: "",
    status: "pending",
  });
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const [editInput, setEditInput] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...input,
      id: count,
    };

    setList((prev) => [...prev, newTask]);

    setCount((prev) => prev + 1);

    setInput({
      id: "",
      task: "",
      description: "",
      status: "pending",
    });
  };
  const markDone = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, status: "completed" } : item,
      ),
    );
  };

  const deleteTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const saveTask = (e) => {
    e.preventDefault();
    setList(list.map((task) => (task.id === editInput.id ? editInput : task)));
    setEditInput(null);
  };
  return (
    <>
      <div className={todo.container}>
        <div className={todo.box1}>
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
        </div>
        <div className={todo.box2}>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Description</th>
                <th>Status</th>
                <th>Done</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {list.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.task}</td>
                  <td>{task.description}</td>
                  <td>{task.status}</td>
                  <td>
                    <button onClick={() => markDone(task.id)}>Done</button>
                  </td>
                  <td>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                  </td>
                  <td>
                    <button onClick={() => setEditInput(task)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {editInput && (
          <form onSubmit={saveTask}>
            <input
              type="text"
              value={editInput.task}
              onChange={(e) => {
                setEditInput({ ...editInput, task: e.target.value });
              }}
            />
            <br />
            <br />
            <input
              type="text"
              value={editInput.description}
              onChange={(e) => {
                setEditInput({ ...editInput, description: e.target.value });
              }}
            />
            <br />
            <br />
            <button type="submit">Save</button>
          </form>
        )}
      </div>
    </>
  );
};

export default Todo_01;
