import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { onNewValue, formState, username, password, email, onResetForm } =
    useForm({
      username: "",
      password: "",
      email: "",
    });

  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <input
        type="password"
        placeholder="Constraseña"
        className="form-control mt-2"
        name="password"
        value={password}
        onChange={onNewValue}
      />
      <button onClick={onResetForm} className="btn btn-secondary mt-2">
        Borrar
      </button>
    </>
  );
};
