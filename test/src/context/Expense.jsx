import React, { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenseList: [],
  addExpense: () => {},
  deleteExpense: () => {},
  editExpense: () => {},
  handleExpenseEdit: () => {},
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
                  ...e,
                  ...input,
                  amount: Number(input.amount),
                }
              : e,
          ),
          editValue: null,
        };
      } else {
        const newExpense = {
          id: Date.now(),
          title: input.title,
          description: input.description,
          category: input.category,
          amount: Number(input.amount),
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
  const [state, dispatch] = useReducer(expenseReducer, initialValues);

  const addExpense = (input) => {
    if (!input || !input.title) {
      alert("Must fill all the details asked!!!!");
      return;
    }
    dispatch({ type: "add", payload: input });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const editExpense = (expense) => {
    dispatch({ type: "edit", payload: expense });
  };

  const credit = state.expenseList
    .filter((e) => e.type === "credit")
    .reduce((acc, item) => acc + Number(item.amount || 0), 0);

  const debit = state.expenseList
    .filter((e) => e.type === "debit")
    .reduce((acc, item) => acc + Number(item.amount || 0), 0);

  const balance = credit - debit;

  const values = {
    expenseList: state.expenseList,
    addExpense,
    deleteExpense,
    editExpense,
    handleExpenseEdit: editExpense,
    editValue: state.editValue,
    balance,
    credit,
    debit,
  };

  return (
    <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
