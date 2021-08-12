import React, { useState } from "react";
import data from "./data.json";

export const Context = React.createContext();

const DataGlobalState = ({ children }) => {
  const [dataState, setDataState] = useState(data);

  return (
    <Context.Provider value={[dataState, setDataState]}>
      {children}
    </Context.Provider>
  );
};

export default DataGlobalState;
