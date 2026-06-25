import { useState } from "react";

const OnSubmit_02 = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers((prev) => [...prev, user]);
    setUser({ name: "", email: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      {users.map((u, index) => (
        <ul key={index}>
          <li>{u.name}</li>
          <li>{u.email}</li>
        </ul>
      ))}
    </>
  );
};

export default OnSubmit_02;
