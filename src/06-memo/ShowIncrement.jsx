import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me estoy ejecutando");
  return (
    <div>
      <button onClick={() => increment(5)} className="btn btn-primary">
        Increment
      </button>
    </div>
  );
});
