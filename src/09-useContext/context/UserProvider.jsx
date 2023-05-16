import React from "react";
import { UserContext } from "./UserContext";

const user = {
  name: "Messi",
  year: 35,
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ name: "Jose", user }}>
      {children}
    </UserContext.Provider>
  );
};
