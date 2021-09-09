import React, { useContext } from "react";

import { userData } from "../helpers/UserData";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container text-center mt-5">
      <h1>Home</h1>
      <hr />
      {user ? (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
