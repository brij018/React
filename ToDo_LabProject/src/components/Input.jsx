import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
        <Form action="" onSubmit={handleSubmit}>
          <Form.Group className="m-2">
            <Form.Label htmlFor="">Task:</Form.Label>
            <Form.Control
              type="text"
              value={input.task}
              name="task"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label htmlFor="">Description:</Form.Label>
            <Form.Control
              type="text"
              value={input.description}
              name="description"
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
          <Button variant="success" className="m-2" type="submit">
            ADD
          </Button>
        </Form>
      )}
      {editInput && (
        <Form action="" onSubmit={saveTask}>
          <Form.Group className="m-2">
            <Form.Label htmlFor="">Task:</Form.Label>
            <Form.Control
              type="text"
              value={editInput.task}
              name="task"
              onChange={(e) => {
                setEditInput({ ...editInput, task: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label htmlFor="">Description:</Form.Label>
            <Form.Control
              type="text"
              value={editInput.description}
              name="description"
              onChange={(e) => {
                setEditInput({ ...editInput, description: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="info" className="m-2" type="submit">
            Update
          </Button>
        </Form>
      )}
    </>
  );
};

export default Input;
