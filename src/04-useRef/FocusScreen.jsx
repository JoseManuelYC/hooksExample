import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onCLick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese un nombre"
        className="form form-control"
      />

      <button className="btn btn-outline-secondary mt-2" onClick={onCLick}>
        Set Focus
      </button>
    </>
  );
};
