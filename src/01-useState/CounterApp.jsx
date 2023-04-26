import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;

  const newValue = () => {
    setCounter({
      ...state,
      counter1: counter1 + 1,
    });
  };

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h2>Counter: {counter2}</h2>
      <h2>Counter: {counter3}</h2>
      <hr />
      <button className="btn" onClick={newValue}>
        +1
      </button>
    </>
  );
};
