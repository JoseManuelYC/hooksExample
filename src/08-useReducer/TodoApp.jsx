import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodos";

export const TodoApp = () => {
  const { todos, handleDeleteTodo, handleCheckTodo, handleNewTodo } = useTodo(
    []
  ); // Custom Hook

  return (
    <>
      <h1>| Todo App |- JMYC</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onCheckTodo={handleCheckTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <AddTodo onNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </>
  );
};
