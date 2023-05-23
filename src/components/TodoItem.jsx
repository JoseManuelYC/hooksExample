export const TodoItem = ({ todo, onDeleteTodo, onCheckTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          aria-label="span"
          className={`align-self-center ${
            todo.done ? "text-decoration-line-through" : ""
          }`}
          onClick={() => onCheckTodo(todo.id)}
        >
          {todo.todo}{" "}
        </span>
        <button
          className="btn btn-outline-danger"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </li>
    </>
  );
};
