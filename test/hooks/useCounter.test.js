import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
describe("Pruebas en el useCounter", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, resetCounter } = result.current;

    expect(counter).toBe(0);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
  });

  test("debe de generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe incrementar el valor", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(103);
  });
  test("Debe decrementar el valor", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(97);
  });
  test("Debe resetear el valor", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, resetCounter } = result.current;

    act(() => {
      increment(2);
      resetCounter();
    });
    expect(result.current.counter).toBe(100);
  });
});
