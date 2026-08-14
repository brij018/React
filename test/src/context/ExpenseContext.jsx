import React, { createContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Date.now() },
    ]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  const resetExpenses = () => {
    setExpenses([]);
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        setExpenses,
        addExpense,
        deleteExpense,
        resetExpenses,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
