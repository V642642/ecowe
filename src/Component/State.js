import { createContext, useContext, useReducer } from "react";

export const Context = createContext({});
export  const State = ({ reducer, intialstate, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, intialstate)}>
      {children}
    </Context.Provider>
  );
};

export  const UsestateValue = () => useContext(Context)