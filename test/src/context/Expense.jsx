import React from "react";
import { createContext, useState, useEffect, useReducer } from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  addExpense: () => {},
  deleteExpense: () => {},
  editExpense: () => {},
  editValue: null,
  balance: 0,
  credit: 0,
  debit: 0,
});

const initialValues = {
  expenseList: [
    {
      id: 1,
      title: "Breakfast",
      description: "Sandwich",
      category: "food",
      amount: 1000,
      date: "2026-08-17",
      type: "credit",
    },
  ],
  editValue: null,
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const input = action.payload;
      if (state.editValue) {
        return {
          ...state,
          expenseList: state.expenseList.map((e) =>
            e.id === state.editValue.id
              ? {
                  ...expenseList,
                  ...input,
                }
              : expenseList,
          ),
          editValue: null,
        };
      } else {
        const newExpense = {
          id: Date.now(),
          title: input.title,
          description: input.description,
          category: input.category,
          amount: input.amount,
          date: input.date,
          type: input.type,
        };
        return {
          ...state,
          expenseList: [...state.expenseList, newExpense],
        };
      }
    }
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValues);

  const [editValue, setEditValue] = useState(null);

  const addExpense = (input) => {
    if (!input) {
      alert("Must fill all the details asked!!!!");
    }
    dispatch({ type: "add", payload: input });
  };

  const values = {
    expenseList: state.expenseList,
    addExpense,
    editValue,
  };
  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
