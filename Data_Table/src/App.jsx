import React, { useEffect, useState } from "react";
import Add from "./components/Add";
import List from "./components/List";
import { getUsers } from "./api/data";
import { deleteUser } from "./api/data";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    getUsers()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = (user) => {
    setData((prev) => [...prev, user]);
  };

  const handleUpdate = (user) => {
    setData((prev) => prev.map((u) => (u.id === user.id ? user : u)));
    setEditing(null);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
    } catch (err) {
      console.error(err.message);
    }
    setData((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <>
      <Add
        key={editing?.id ?? "new"}
        editing={editing}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        onCancel={() => setEditing(null)}
      />
      <List
        data={data}
        loading={loading}
        error={error}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </>
  );
};

export default App;