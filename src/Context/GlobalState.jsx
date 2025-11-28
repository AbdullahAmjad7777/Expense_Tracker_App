import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

// ✅ Load from LocalStorage
const initialstate = {
  transaction: JSON.parse(localStorage.getItem("transactions")) || [],
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  // ✅ Save to LocalStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transaction));
  }, [state.transaction]);

  const deleteTransation = (id) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id,
    });
  };

  const AddTransation = (Transaction) => {
    dispatch({
      type: "ADD_TRANSACTIONS",
      payload: Transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransation,
        AddTransation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
