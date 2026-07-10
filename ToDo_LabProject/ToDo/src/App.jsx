import React from "react";
import { useState } from "react";
import Input from "./components/Input";
import Table_01 from "./components/Table";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
  const [editInput, setEditInput] = useState(null);

  const addToList = (input) => {
    if (!input.task || !input.description) {
      return alert("Fields must be filled!!!!!!!");
    } else {
      const newTask = {
        ...input,
        id: Date.now(),
      };
      setList((prev) => [...prev, newTask]);
    }
  };

  const markDone = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, status: "completed" } : item,
      ),
    );
  };
  const deleteTask = (id) => {
    setList(list.filter((i) => i.id !== id));
  };
  const saveTask = (e) => {
    e.preventDefault();
    setList(list.map((item) => (item.id === editInput.id ? editInput : item)));
    setEditInput(null);
  };
  return (
    <>
      <Container className="pt-5">
        <Stack gap={5}>
          <h1 className="text-center">ToDo List</h1>
          <Row className="justify-content-center">
            <Col md={6}>
              <Input
                addToList={addToList}
                editInput={editInput}
                setEditInput={setEditInput}
                saveTask={saveTask}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table_01
                list={list}
                markDone={markDone}
                deleteTask={deleteTask}
                setEditInput={setEditInput}
              />
            </Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
};

export default App;
