import React from "react";

const Table = ({ list, markDone, deleteTask, setEditInput }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Description</th>
            <th>Done</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {list.map((t, index) => {
            <tr key={t.id}>
              <td>{index + 1}</td>
              <td>{t.task}</td>
              <td>{t.description}</td>
              <td>
                <button onClick={markDone(t.id)}></button>
              </td>
              <td>
                <button onClick={deleteTask(t.id)}></button>
              </td>
              <td>
                <button onClick={setEditInput(t)}></button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
