import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/Expense";
import { Form, Table, Badge, Button, Col, Row } from "react-bootstrap";

const ListExpense = () => {
  const {
    expenseList,
    handleExpenseEdit,
    deleteExpense,
    credit,
    debit,
    balance,
  } = useContext(ExpenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    title: "",
    type: "all",
    category: "all",
    sort: "",
  });

  const handleChange = (e) => {
    setExpenseQuery((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const filterList = expenseList
    .filter((l) =>
      l.title.toLowerCase().includes(expenseQuery.title.toLowerCase()),
    )
    .filter((l) =>
      expenseQuery.type === "all" ? true : l.type === expenseQuery.type,
    )
    .filter((l) =>
      expenseQuery.category === "all"
        ? true
        : l.category === expenseQuery.category,
    );

  const sortedList = [...filterList].sort((a, b) => {
    if (expenseQuery.sort === "asc") {
      return b.id - a.id;
    }

    if (expenseQuery.sort === "desc") {
      return a.id - b.id;
    }

    if (expenseQuery.sort === "moneyAsc") {
      return Number(a.amount) - Number(b.amount);
    }

    if (expenseQuery.sort === "moneyDsc") {
      return Number(b.amount) - Number(a.amount);
    }
  });

  return (
    <>
      <Row className="mb-3 g-3 text-center">
        <Col xs={4}>
          <div className="p-2 bg-success bg-opacity-10 rounded-3">
            <h6 className="text-success text-uppercase mb-1">Balance</h6>
            <h4 className="fw-bold text-success mb-0">{balance}</h4>
          </div>
        </Col>
        <Col xs={4}>
          <div className="p-2 bg-primary bg-opacity-10 rounded-3">
            <h6 className="text-primary text-uppercase mb-1">Credit</h6>
            <h4 className="fw-bold text-primary mb-0">{credit}</h4>
          </div>
        </Col>
        <Col xs={4}>
          <div className="p-2 bg-danger bg-opacity-10 rounded-3">
            <h6 className="text-danger text-uppercase mb-1">Debit</h6>
            <h4 className="fw-bold text-danger mb-0">{debit}</h4>
          </div>
        </Col>
      </Row>

      <Form className="mb-3">
        <Row className="g-2">
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Search by name"
              name="title"
              value={expenseQuery.title}
              onChange={(e) => handleChange(e)}
            />
          </Col>
          <Col md={3}>
            <Form.Select
              name="type"
              id="type"
              value={expenseQuery.type}
              onChange={(e) => handleChange(e)}
            >
              <option value="all">Expense Type</option>
              <option value="credit">credit</option>
              <option value="debit">debit</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select
              name="category"
              id="category"
              value={expenseQuery.category}
              onChange={(e) => handleChange(e)}
            >
              <option value="all">Expense category</option>
              <option value="Money Transfer">Money Transfer</option>
              <option value="Cash Withdrawal">Cash Withdrawal</option>
              <option value="General Expense">General Expense</option>
              <option value="Food&Dining">Food&Dining</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
            </Form.Select>
          </Col>
          <Col md={2}>
            <Form.Select
              name="sort"
              id="sort"
              value={expenseQuery.sort}
              onChange={(e) => handleChange(e)}
            >
              <option value="asc">ascending</option>
              <option value="desc">descending</option>
              <option value="moneyAsc">Money Ascending</option>
              <option value="moneyDsc">Money Descending</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>

      <div className="table-responsive">
        <Table striped bordered hover className="mb-0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Expense Type</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedList.length > 0 ? (
            sortedList.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.amount}</td>
                  <td>{data.date}</td>
                  <td>{data.category}</td>
                  <td>
                    <Badge
                      bg={data.type === "credit" ? "success" : "danger"}
                      className="text-capitalize"
                    >
                      {data.type}
                    </Badge>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => handleExpenseEdit(data.id)}
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => deleteExpense(data.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={9} className="text-center py-4">
                <h5 className="text-muted mb-0">No data found</h5>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default ListExpense;
