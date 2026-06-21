import { useState } from "react";

function Fetch() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

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
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.completed ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Fetch;
