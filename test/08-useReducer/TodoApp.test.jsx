import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en el <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, todo: "Todo#1", done: false },
      { id: 2, todo: "Todo#2", done: true },
    ],
    todosCount: 2,
    pendingTodos: 1,
    handleDeleteTodo: jest.fn(),
    handleCheckTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });
  test("Debe de mostrar el componente", () => {
    render(<TodoApp />);
    expect(screen.getByText("Todo#1")).toBeTruthy();
    expect(screen.getByText("Todo#2")).toBeTruthy();
  });
});
