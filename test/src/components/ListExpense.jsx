import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/Expense";
import { Form, Table, Badge, Button } from "react-bootstrap";

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
      l.title.toLowerCase().includes(expenseQuery.title.toLowerCase())
    )
    .filter((l) =>
      expenseQuery.type === "all" ? true : l.type === expenseQuery.type
    )
    .filter((l) =>
      expenseQuery.category === "all"
        ? true
        : l.category === expenseQuery.category
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
    return 0;
  });

  return (
    <div className="d-flex flex-column gap-4 p-3">
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center gap-3">
        <div className="flex-fill p-3 rounded-3 text-center stat-card-balance">
          <h6 className="text-secondary text-uppercase mb-1 fw-medium small">
            Balance
          </h6>
          <h4 className="fw-bold text-dark mb-0">₹{balance}</h4>
        </div>
        <div className="flex-fill p-3 rounded-3 text-center stat-card-credit">
          <h6 className="text-success text-uppercase mb-1 fw-medium small">
            Credit
          </h6>
          <h4 className="fw-bold text-success mb-0">₹{credit}</h4>
        </div>
        <div className="flex-fill p-3 rounded-3 text-center stat-card-debit">
          <h6 className="text-danger text-uppercase mb-1 fw-medium small">
            Debit
          </h6>
          <h4 className="fw-bold text-danger mb-0">₹{debit}</h4>
        </div>
      </div>

      <Form className="w-100">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-between gap-3">
          <div className="flex-grow-1" style={{ minWidth: "220px" }}>
            <Form.Control
              type="text"
              placeholder="Search by title..."
              name="title"
              value={expenseQuery.title}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex flex-row flex-wrap gap-2 flex-grow-1 justify-content-md-end">
            <Form.Select
              name="type"
              id="type"
              value={expenseQuery.type}
              onChange={handleChange}
              style={{ width: "auto", minWidth: "140px" }}
            >
              <option value="all">All Types</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </Form.Select>

            <Form.Select
              name="category"
              id="category"
              value={expenseQuery.category}
              onChange={handleChange}
              style={{ width: "auto", minWidth: "160px" }}
            >
              <option value="all">All Categories</option>
              <option value="Money Transfer">Money Transfer</option>
              <option value="Cash Withdrawal">Cash Withdrawal</option>
              <option value="General Expense">General Expense</option>
              <option value="Food&Dining">Food&Dining</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
              <option value="food">Food</option>
            </Form.Select>

            <Form.Select
              name="sort"
              id="sort"
              value={expenseQuery.sort}
              onChange={handleChange}
              style={{ width: "auto", minWidth: "150px" }}
            >
              <option value="">Sort By</option>
              <option value="asc">Newest First</option>
              <option value="desc">Oldest First</option>
              <option value="moneyAsc">Amount: Low to High</option>
              <option value="moneyDsc">Amount: High to Low</option>
            </Form.Select>
          </div>
        </div>
      </Form>

      <div className="table-responsive rounded-3 border shadow-sm">
        <Table striped bordered hover align="middle" className="mb-0 text-center">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Category</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedList.length > 0 ? (
              sortedList.map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td className="fw-medium">{data.title}</td>
                  <td>{data.description}</td>
                  <td className="fw-semibold">₹{data.amount}</td>
                  <td>{data.date}</td>
                  <td>
                    <Badge bg="light" text="dark" className="border text-capitalize">
                      {data.category}
                    </Badge>
                  </td>
                  <td>
                    <Badge
                      bg={data.type === "credit" ? "success" : "secondary"}
                      className="text-capitalize"
                    >
                      {data.type}
                    </Badge>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline-dark"
                        onClick={() => handleExpenseEdit(data.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => deleteExpense(data.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-4 text-muted">
                  No expenses found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListExpense;
