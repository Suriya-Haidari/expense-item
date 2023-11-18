import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
export default function ExpenseList(props) {
  let expenseData = <p> No data exist!</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Data not found!</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (expenseData = props.filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
          />
        )))
      }
    </ul>
  );
}
