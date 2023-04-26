import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMouseDown = ({ x, y }) => {
      /* const coords = { x, y }; */
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseDown);

    return () => {
      window.removeEventListener("mousemove", onMouseDown); //A pesar de que no muestra un error en React18, no hacerlo es una mala practica, ya que es cambiar el estado en un componente que no existe en ese momento
    };
  }, []);

  return (
    <>
      <h2>Usuario ya existe</h2>
      {JSON.stringify({ coords })}
    </>
  );
};
