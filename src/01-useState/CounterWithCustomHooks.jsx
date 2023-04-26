import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, resetCounter } = useCounter();
  return (
    <>
      <h1>Counter with hooks: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        -1
      </button>
    </>
  );
};
