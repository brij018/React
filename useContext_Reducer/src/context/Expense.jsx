import { createContext, useState, useEffect, useReducer } from "react";
import React from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  addExpense: () => {},
  editValue: null,
  deleteExpense: () => {},
  handleExpenseEdit: () => {},
  credit: 0,
  debit: 0,
  balance: 0,
});

const init = () => {
  try {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : initialValues;
  } catch (error) {
    console.log(error);
    return initialValues;
  }
};

const initialValues = {
  expenseList: [
    {
      id: 1,
      title: "food",
      description: "pizza",
      category: "food",
      amount: 1000,
      date: "2026-07-30",
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
          expenseList: state.expenseList.map((expense) =>
            expense.id === state.editValue.id
              ? {
                  ...expense,
                  ...input,
                }
              : expense,
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
    case "edit": {
      return {
        ...state,
        editValue: action.payload,
      };
    }
    case "delete": {
      return {
        ...state,
        expenseList: state.expenseList.filter((l) => l.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

const ExpenseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialValues, init);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(state));
  }, [state]);

  const addExpense = (input) => {
    if (!input) {
      alert("all field is required");
    }
    dispatch({ type: "add", payload: input });
  };

  const handleExpenseEdit = (id) => {
    const editValue = state.expenseList.find((expense) => expense.id === id);
    dispatch({ type: "edit", payload: editValue });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const credit = state.expenseList.reduce((total, expense) => {
    return expense.type === "credit" ? total + Number(expense.amount) : total;
  }, 0);

  const debit = state.expenseList.reduce((total, expense) => {
    return expense.type === "debit" ? total + Number(expense.amount) : total;
  }, 0);

  const balance = credit - debit;
  const value = {
    expenseList: state.expenseList,
    addExpense,
    handleExpenseEdit,
    editValue: state.editValue,
    deleteExpense,
    credit,
    debit,
    balance,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
