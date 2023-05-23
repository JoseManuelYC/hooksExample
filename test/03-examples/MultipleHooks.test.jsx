import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleHooks } from "../../src/03-examples/MultipleHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en el FC <MultipleHooks />", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });
  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleHooks />);
    const nextQuoteBtn = screen.getByRole("button", { name: "Next Quote" });
    expect(screen.getByText("Multiple Hooks"));
    expect(screen.getByText("...Loading"));
    expect(nextQuoteBtn.disabled).toBeTruthy();
  });
  test("Debe de mostrar un Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jose", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleHooks />);
    const nextQuoteBtn = screen.getByRole("button", { name: "Next Quote" });
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Jose")).toBeTruthy();
    expect(nextQuoteBtn.disabled).toBeFalsy();
  });
  test("Debe de llamar la funcion incrementar", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Jose", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleHooks />);
    const newQuoteBtn = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(newQuoteBtn);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
