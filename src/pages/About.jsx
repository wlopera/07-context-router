import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="container text-center">
      <h1>Acerca de ...</h1>;
      <hr />
      {user ? (
        <div>
          <h3>
            Usuario: {user.data.first_name} {user.data.last_name}
          </h3>
          <h3> Correo: {user.data.email}</h3>

          <img
            src={user.data.avatar}
            alt={user.data.id}
            width="150px"
            height="150px"
          />
        </div>
      ) : (
        <h2 className="text-danger">Por favor, conectese</h2>
      )}
    </div>
  );
};

export default About;
