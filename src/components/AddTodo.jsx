import { useForm } from "../hooks/useForm";

export const AddTodo = ({ onNewTodo }) => {
  const { todo, onNewValue, onResetForm } = useForm({
    todo: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (todo.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() * 2,
      todo,
      done: false,
    };
    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="todo"
          value={todo}
          onChange={onNewValue}
        />
        <button className="btn btn-outline-primary mt-2" type="submit">
          Agregar Tarea
        </button>
      </form>
    </>
  );
};
