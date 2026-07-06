import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";

const App = () => {
  const [list, setList] = useState([]);
  const [editInput, setEditInput] = useState(null);

  const addToList = (input) => {
    if (!input.task || !input.description) {
      return alert("Fields must be filled!!!!!!!");
    } else {
      const newTask = {
        ...input,
        id: new Date().getDate(),
      };
      setList((prev) => [...prev, newTask]);
    }
  };

  const markDone = (id) => {
    setList(
      list.map((task) => (task.id === id ? { status: "complete" } : "pending")),
    );
  };
  const deleteTask = (id) => {
    setList(list.filter((i) => i.id === id));
  };
  const saveTask = (e) => {
    e.preventDefault();
    setList(list.map((task) => (task.id === editInput.id ? editInput : task)));
    setEditInput(null);
  };
  return (
    <>
      <Input
        addToList={addToList}
        editInput={editInput}
        setEditInput={setEditInput}
        saveTask={saveTask}
      />
      <Table
        list={list}
        markDone={markDone}
        deleteTask={deleteTask}
        setEditInput={setEditInput}
      />
    </>
  );
};

export default App;
