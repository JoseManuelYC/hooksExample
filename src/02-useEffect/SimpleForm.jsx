import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "",
    email: "",
  });
  const { username, email } = formState;

  const onNewValue = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("useEffect called!");
  }, []); //Una dependencia vacia, quiere decir que solo dispara el efecto o se monta la primera vez que se dispara el componente
  useEffect(() => {
    /*     console.log("cuando el formState cambia");
     */
  }, [formState]);
  useEffect(() => {
    /*     console.log("Cambia el email, y por consiguiente cambia el formstate"); */
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <input
        type="text"
        placeholder="Username"
        className="form-control"
        name="username"
        value={username}
        onChange={onNewValue}
      />
      <input
        type="email"
        placeholder="email"
        className="form-control mt-2"
        name="email"
        value={email}
        onChange={onNewValue}
      />
      {username === "joseYanez" && <Message />}
    </>
  );
};
