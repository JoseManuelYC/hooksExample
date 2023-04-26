import React from "react";

export const Small = React.memo(({ counter }) => {
  console.log("Dibujando el contador");
  return <small>{counter}</small>;
});
