import { useState } from "react";
import Input_01 from "./components/Input_01";
import Table from "./components/Table";
import todo from "./maintodo.module.css";

const App = () => {
  const defaultTasks = [
    {
      id: 1,
      task: "Complete The To-Do project",
      description: "Gotta complete it before the deadline",
      status: "pending",
    },
    {
      id: 2,
      task: "Complete The Styling Of The To-Do project",
      description: "Make it look good",
      status: "pending",
    },
  ];
  const [list, setList] = useState(defaultTasks);

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
          <h1 className={todo.heading}>
            <u>To Do List</u>
          </h1>
          <div className={todo.box1}>
            <Input_01
              addToList={addToList}
              editInput={editInput}
              saveTask={saveTask}
              setEditInput={setEditInput}
            />
          </div>
          <div className={todo.box3}>
            <div className={todo.box3a}>
              <p>
                Pending Tasks:
                {list.filter((task) => task.status === "pending").length}
              </p>
            </div>
            <div className={todo.box3a}>
              <p>
                Completed Tasks:
                {list.filter((task) => task.status === "completed").length}
              </p>
            </div>
            <div className={todo.box3a}>
              <p>Total Tasks: {list.length}</p>
            </div>
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
