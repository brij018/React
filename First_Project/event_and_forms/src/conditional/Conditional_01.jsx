import { useState } from "react";

const Conditional_01 = () => {
  const [login, setLogin] = useState(false);

  const [user, setUser] = useState(false);

  return (
    <>
      <h2>{login ? "Welcome to the server" : "click to login"}</h2>

      <button onClick={() => setLogin(!login)}>
        {login ? "LogOut" : "LogIn"}
      </button>

      {/* conditional rendering */}

      {user && <h3>Welcome user!!</h3>}
    </>
  );
};

export default Conditional_01;
