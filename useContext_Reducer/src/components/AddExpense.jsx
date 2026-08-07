import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/Expense";

const AddExpense = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "General Expense",
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
      category: "",
      amount: 0,
      date: "",
      type: "debit",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={input.title}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={input.description}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={input.amount}
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <label htmlFor="date">Date: </label>
        <input
          type="date"
          name="date"
          value={input.date}
          onChange={(e) => handleChange(e)}
          required
        />

        <br />
        <br />

        <label htmlFor="category">Category: </label>
        <select
          name="category"
          value={input.category}
          onChange={(e) => handleChange(e)}
          required
        >
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>
        <br />
        <br />

        <label htmlFor="type">Expense type: </label>
        <select
          name="type"
          value={input.type}
          onChange={(e) => handleChange(e)}
        >
          <option name="type" value="credit" defaultChecked>
            credit
          </option>
          <option name="type" value="debit">
            debit
          </option>
        </select>

        <br />
        <br />
        <button type="submit">{editValue ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default AddExpense;
