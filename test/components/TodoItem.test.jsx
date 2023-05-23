import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/components/TodoItem";

describe("Pruebas en el FC <TodoItem />", () => {
  const todo = {
    id: 1,
    todo: "Nuevo Todo",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onCheckTodoMock = jest.fn();

  beforeAll = () => jest.clearAllMocks();

  test("Debe de mostrar el todo pendiente por completar", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCheckTodo={onCheckTodoMock}
      />
    );
    const listItem = screen.getByRole("listitem");
    const spanItem = screen.getByLabelText("span");
    expect(listItem.className).toContain(
      "list-group-item d-flex justify-content-between"
    );
    expect(spanItem.className).toContain("align-self-center");
  });
  test("span debe llamar la funcion checkTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCheckTodo={onCheckTodoMock}
      />
    );
    const spanItem = screen.getByLabelText("span");
    fireEvent.click(spanItem);
    expect(onCheckTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("debe de llamar la funcino deleteTodo", () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onCheckTodo={onCheckTodoMock}
      />
    );
    const btnItem = screen.getByRole("button");
    fireEvent.click(btnItem);
    expect(btnItem.className).toContain("btn btn-outline-danger");
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
