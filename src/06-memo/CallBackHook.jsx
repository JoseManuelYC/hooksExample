import { useEffect } from "react";
import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback((value) => {
    console.log("ejecucion");
    setCounter((c) => c + value);
  }, []);

  useEffect(() => {}, [increment]);

  return (
    <div>
      <h1>UseCallBackHook {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
