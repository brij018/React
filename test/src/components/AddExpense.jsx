import React from "react";
import { ExpenseContext } from "../context/Expense";
import { useContext, useState, useEffect } from "react";

const AddExpense = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "Household",
    amount: 0,
    date: "",
    type: "debit",
  });

  const { addExpense, editValue } = useContext(ExpenseContext);
  useEffect(() => {
    if (editValue) {
      setInput(editValue);
    }
  }, [editValue]);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense(input);

    setInput({
      title: "",
      description: "",
      category: "Household",
      amount: 0,
      date: "",
      type: "debit",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input
          type="text"
          name="title"
          placeholder="enter the title"
          required
          value={input.title}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Description: </label>
        <input
          type="text"
          name="description"
          placeholder="enter the description"
          required
          value={input.description}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Category: </label>
        <select
          name="category"
          value={input.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="category_1">category 1</option>
          <option value="category_2">category 2</option>
          <option value="category_3">category 3</option>
          <option value="category_4">category 4</option>
        </select>
        <br />
        <br />
        <label htmlFor="">amount: </label>
        <input
          type="number"
          required
          name="amount"
          value={input.amount}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Date: </label>
        <input
          type="date"
          name="date"
          value={input.date}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label htmlFor="">Type: </label>
        <select
          name="type"
          id=""
          value={input.type}
          onChange={(e) => handleChange(e)}
        >
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <br />
        <br />
        <button type="submit">{editValue ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default AddExpense;
