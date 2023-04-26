import { useMemo } from "react";
import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const heavyStuff = (value = 100) => {
  for (let i = 0; i < value; i++) {
    console.log("proceso");
  }
  return `${value} iteraciones realizadas`;
};

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(100);
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]); //Memoriza el valor nuevo cada vez que el counter cambia

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />
      <h4>{memorizedValue}</h4>
      <button className="btn btn-outline-success" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
