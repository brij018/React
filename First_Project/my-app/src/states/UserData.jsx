import { useState } from "react";

function Users() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    setUsers((prev) => [...prev, user]);

    setUser({ name: "", email: "" });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        value={user.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="email"
        name="email"
        placeholder="enter your email"
        value={user.email}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Users;
