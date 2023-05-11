import { useReducer } from "react";
import { useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const initialState = [];

export const useTodo = () => {
  //1 function
  //2 State inicial
  //3 o una funcion que inicializa el Reducer, tambien para cuando la funcion o el proceso que se esta ejecutando es muy pesado (opcional)

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  const handleNewTodo = (todo) => {
    const action = {
      type: "Add todo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "Remove todo",
      payload: id,
    });
  };
  const handleCheckTodo = (id) => {
    dispatch({
      type: "Check todo",
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    handleDeleteTodo,
    handleCheckTodo,
    handleNewTodo,
  };
};
