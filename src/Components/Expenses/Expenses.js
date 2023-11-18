import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  // const expenses = props.expenses;
  const [mySelectedYear, setSelectedYear] = useState("2019");

  let infoText = "2020, 2021 & 2022";

  if (mySelectedYear === "2020") {
    infoText = "2019,2021 & 2022";
  } else if (mySelectedYear == "2021") {
    infoText = "2019, 2020 & 2022";
  } else {
    infoText = "2019, 2020 & 2021";
  }

  const getData = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((filterExpense) => {
    return mySelectedYear === filterExpense.date.getFullYear().toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={mySelectedYear}
        onGetData={getData}
      ></ExpensesFilter>
      <p>The data for years, {infoText} is hidden.</p>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

// Second Way
{
  /* {filteredExpenses.length === 0 && <p>No data exist!</p>}
      {filteredExpenses.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          date={expenses.date}
          amount={expenses.amount}
        />
      ))} */
}

// {filteredExpenses.length === 0 && <p>No data exist!</p>}
// {filteredExpenses.map((expenses) => (
//   <ExpenseItem
//     key={expenses.id}
//     title={expenses.title}
//     date={expenses.date}
//     amount={expenses.amount}
//   />
// ))}
{
  /* {filteredExpenses.length === 0 ? (
        <p>No data exist!</p>
      ) : (
        filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            date={expenses.date}
            amount={expenses.amount}
          ></ExpenseItem>
        ))
      )} */
}
