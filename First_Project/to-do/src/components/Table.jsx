import todo from "../maintodo.module.css";

const Table = ({ list, markDone, deleteTask, setEditInput }) => {
  return (
    <>
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
    </>
  );
};

export default Table;
