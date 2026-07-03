import { useState } from "react";
import Input_01 from "./components/Input_01";
import Table from "./components/Table";
import Edit from "./components/Edit";
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
        <Input_01 addToList={addToList} />
        <Table
          list={list}
          markDone={markDone}
          deleteTask={deleteTask}
          setEditInput={setEditInput}
        />
        <Edit
          editInput={editInput}
          saveTask={saveTask}
          setEditInput={setEditInput}
        />
      </div>
    </>
  );
};

export default App;
