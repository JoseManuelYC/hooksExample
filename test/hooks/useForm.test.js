import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en el useForm", () => {
  const initialValue = {
    name: "Jose",
    email: "josemanuel@google.com",
  };
  test("debe de retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialValue));
    expect(result.current).toEqual({
      name: initialValue.name,
      email: initialValue.email,
      formState: { name: "Jose", email: "josemanuel@google.com" },
      onNewValue: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newValue = "Messi";
    const { result } = renderHook(() => useForm(initialValue));
    const { onNewValue } = result.current;
    act(() => {
      onNewValue({ target: { name: "name", value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de resetear el formulario", () => {
    const newValue = "Juan";
    const { result } = renderHook(() => useForm(initialValue));
    const { onNewValue, onResetForm } = result.current;

    act(() => {
      onNewValue({ target: { name: "name", value: newValue } });
      onResetForm();
    });
    expect(result.current.formState).toEqual({
      name: "Jose",
      email: "josemanuel@google.com",
    });
    expect(result.current.name).toBe(initialValue.name);
    expect(result.current.formState.name).toBe(initialValue.name);
  });
});
