import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Table_01 = ({ list, markDone, deleteTask, setEditInput }) => {
  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Done</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t, index) => (
            <tr key={t.id}>
              <td>{index + 1}</td>
              <td>{t.task}</td>
              <td>{t.description}</td>
              <td>{t.status}</td>

              <td>
                <Button variant="outline-dark" onClick={() => markDone(t.id)}>
                  Done
                </Button>
              </td>

              <td>
                <Button variant="outline-dark" onClick={() => deleteTask(t.id)}>
                  Delete
                </Button>
              </td>

              <td>
                <Button variant="outline-dark" onClick={() => setEditInput(t)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Table_01;
