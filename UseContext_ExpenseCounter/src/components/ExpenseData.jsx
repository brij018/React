import React from "react";
import { useContext } from "react";
import { ExpenseContext } from "../context/Expense";

const ExpenseData = () => {
  const { balance, credit, debit } = useContext(ExpenseContext);
  return (
    <>
      <h1>Balance : {balance}</h1>
      <br />
      <h1>Credit : {credit}</h1>
      <br />
      <h1>Debit : {debit}</h1>
      <br />
    </>
  );
};

export default ExpenseData;
