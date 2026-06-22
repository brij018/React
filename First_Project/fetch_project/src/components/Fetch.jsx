import { useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const loadData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );

      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };
  const saveUser = () => {
    setUsers(users.map((user) => (user.id === editUser.id ? editUser : user)));
    setEditUser(null);
  };
  return (
    <>
      <button onClick={loadData} disabled={loading}>
        {loading ? "Loading..." : "Load Data"}
      </button>

      {loading && <h2>Loading Data...</h2>}

      {!loading && users.length === 0 && (
        <h2>Click "Load Data" to fetch data.</h2>
      )}

      {!loading && users.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.title}</td>
                <td>{user.completed ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => setEditUser(user)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {editUser && (
        <div>
          <h3>Edit User</h3>
          <input
            type="text"
            value={editUser.title}
            onChange={(e) =>
              setEditUser({ ...editUser, title: e.target.value })
            }
          />
          <select
            value={editUser.completed ? "Yes" : "No"}
            onChange={(e) =>
              setEditUser({ ...editUser, completed: e.target.value === "Yes" })
            }
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <button onClick={saveUser}>Save</button>
        </div>
      )}
    </>
  );
}

export default Fetch;
