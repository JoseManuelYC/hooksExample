import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter();

  return (
    <>
      <h1>
        Counter <Small counter={counter} />
      </h1>
      <hr />
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
