import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en el todoReducer", () => {
  const initialState = [
    {
      id: 1,
      todo: "agregando todo",
      done: false,
    },
  ];
  test("Debe de retornar un estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });
  test("Debe de agregar un todo", () => {
    const action = {
      type: "Add todo",
      payload: {
        id: 2,
        todo: "todo new",
        done: false,
      },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  test("Debe de remover un Todo", () => {
    const action = {
      type: "Remove todo",
      payload: 1,
    };
    const removeTodo = todoReducer(initialState, action);
    expect(removeTodo.length).toBe(0);
  });
  test("Debe de hacer toggle a un todo", () => {
    const action = {
      type: "Check todo",
      payload: 1,
    };
    const checkTodo = todoReducer(initialState, action);
    expect(checkTodo).toEqual([
      {
        id: 1,
        todo: "agregando todo",
        done: true,
      },
    ]);
    expect(checkTodo[0].done).toBe(true);
  });
});
