import { render, screen } from "@testing-library/react";
import { MultipleHooks } from "../../src/03-examples/MultipleHooks";

describe("Pruebas en el FC <MultipleHooks />", () => {
  test("Debe mostrar el componente por defecto", () => {
    render(<MultipleHooks />);
    const nextQuoteBtn = screen.getByRole("button", { name: "Next Quote" });
    expect(screen.getByText("Multiple Hooks"));
    expect(screen.getByText("...Loading"));
    expect(nextQuoteBtn.disabled).toBeTruthy();
  });
});
