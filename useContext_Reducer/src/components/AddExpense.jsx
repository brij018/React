import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/Expense";
import { Form, Button } from "react-bootstrap";

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
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            name="title"
            value={input.title}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId="description" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            value={input.description}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId="amount" className="mb-3">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            name="amount"
            value={input.amount}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId="date" className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={input.date}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>

        <Form.Group controlId="category" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
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
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="type" className="mb-4">
          <Form.Label>Expense Type</Form.Label>
          <Form.Select
            name="type"
            value={input.type}
            onChange={(e) => handleChange(e)}
          >
            <option value="credit">credit</option>
            <option value="debit">debit</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          {editValue ? "Update" : "Add"}
        </Button>
      </Form>
    </>
  );
};

export default AddExpense;
