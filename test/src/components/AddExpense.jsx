import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/Expense";
import { Form, Button, Row, Col } from "react-bootstrap";

const AddExpense = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    category: "General Expense",
    amount: "",
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
      category: "General Expense",
      amount: "",
      date: "",
      type: "debit",
    });
  };

  return (
    <div>
      <h5 className="fw-bold mb-3">{editValue ? "Edit Expense" : "Add Expense"}</h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="small fw-semibold">Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="e.g. Grocery Shopping"
            required
            value={input.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="small fw-semibold">Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="e.g. Supermarket supplies"
            required
            value={input.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Row className="g-2 mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small fw-semibold">Amount (₹)</Form.Label>
              <Form.Control
                type="number"
                required
                name="amount"
                placeholder="0"
                value={input.amount}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="small fw-semibold">Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                required
                value={input.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="g-2 mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="small fw-semibold">Category</Form.Label>
              <Form.Select
                name="category"
                value={input.category}
                onChange={handleChange}
              >
                <option value="General Expense">General Expense</option>
                <option value="Food&Dining">Food & Dining</option>
                <option value="HealthCare">HealthCare</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Money Transfer">Money Transfer</option>
                <option value="Cash Withdrawal">Cash Withdrawal</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group>
              <Form.Label className="small fw-semibold">Type</Form.Label>
              <Form.Select
                name="type"
                value={input.type}
                onChange={handleChange}
              >
                <option value="debit">Debit</option>
                <option value="credit">Credit</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="dark"
          type="submit"
          className="w-100 fw-semibold py-2"
        >
          {editValue ? "Update Expense" : "Add Expense"}
        </Button>
      </Form>
    </div>
  );
};

export default AddExpense;
