import { useState } from "react";
import Input_01 from "./components/Input_01";
import Table from "./components/Table";
import todo from "./maintodo.module.css";

const App = () => {
  const [list, setList] = useState([]);

  const addToList = (input) => {
    if (!input.task || !input.description) {
      return alert("task data required!!!");
    } else {
      const newTask = {
        ...input,
        id: new Date().getDate(),
      };
      setList((prev) => [...prev, newTask]);
    }
  };

  const [editInput, setEditInput] = useState(null);

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
        <div className={todo.mainBox}>
          <h1>To-Do List</h1>
          <div className={todo.box1}>
            <Input_01
              addToList={addToList}
              editInput={editInput}
              saveTask={saveTask}
              setEditInput={setEditInput}
            />
          </div>
          <div className={todo.box2}>
            <Table
              list={list}
              markDone={markDone}
              deleteTask={deleteTask}
              setEditInput={setEditInput}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
