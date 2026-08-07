import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/Expense";

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
      <h1>Balance: {balance}</h1>
      <h1>Credit: {credit}</h1>
      <h1>Debit: {debit}</h1>
      <br />
      <br />
      <br />
      <form>
        <input
          type="text"
          placeholder="search by name"
          name="title"
          value={expenseQuery.title}
          onChange={(e) => handleChange(e)}
        />
        <select
          name="type"
          id="type"
          value={expenseQuery.type}
          onChange={(e) => handleChange(e)}
        >
          <option value="all" selected>
            Expense Type
          </option>
          <option value="credit">credit</option>
          <option value="debit">debit</option>
        </select>
        <select
          name="category"
          id="category"
          value={expenseQuery.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="all" selected>
            Expense category
          </option>
          <option value="Money Transfer">Money Transfer</option>
          <option value="Cash Withdrawal">Cash Withdrawal</option>
          <option value="General Expense">General Expense</option>
          <option value="Food&Dining">Food&Dining</option>
          <option value="HealthCare">HealthCare</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
        </select>
        <select
          name="sort"
          id="sort"
          value={expenseQuery.sort}
          onChange={(e) => handleChange(e)}
        >
          <option value="asc">ascending</option>
          <option value="desc">descending</option>
          <option value="moneyAsc">Money Ascending</option>
          <option value="moneyDsc">Money Descending</option>
        </select>
      </form>
      <br />
      <br />
      <br />
      <table border={2}>
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
                  <td>{data.type}</td>
                  <td>
                    <button onClick={() => handleExpenseEdit(data.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteExpense(data.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <h2>No data found</h2>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ListExpense;
