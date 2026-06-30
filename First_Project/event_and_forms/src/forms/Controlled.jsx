import React from "react";
import { useState } from "react";

const Controlled = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {
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
          placeholder="enter your name"
          onChange={(e) => handleChange(e)}
        />
        <span>you entered {user.name}</span>
        <br />
        <br />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="enter your name"
          onChange={(e) => handleChange(e)}
        />
        <span>you entered {user.email}</span>
        <br />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Controlled;
