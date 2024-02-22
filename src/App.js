import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense";
const INITIAL_Expenses = [
  {
    id: "e1",
    title: "HP Printerr",
    amount: 117.23,
    date: new Date(2021, 3, 11),
  },
  {
    id: "e2",
    title: "Fridge",
    amount: 899.99,
    date: new Date(2022, 2, 6),
  },
  {
    id: "e3",
    title: "Pack of Chairs",
    amount: 313.12,
    date: new Date(2020, 12, 11),
  },
  {
    id: "e4",
    title: "Personal Computer (Dell)",
    amount: 1250,
    date: new Date(2020, 2, 14),
  },
];

function App() {
  const [expenses, setNewExpense] = useState(INITIAL_Expenses);
  // const filterExpenses = expenses.filter((item) => {
  //   if (INITIAL_Expenses.includes("2023")) {
  //     document.innerHTML.INITIAL_Expenses.remove(INITIAL_Expenses[0]);
  //   }
  // });

  const saveNewData = (newExpense) => {
    setNewExpense([newExpense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onSaveNewExpenseData={saveNewData}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
      {/* <WarningButton></WarningButton> */}
      {/* <Toggle></Toggle> */}
      {/* <Ex></Ex> */}
    </div>
  );
}
export default App;
// <div>
//    <MyComponents.HelloWorld />
//   <MyComponents.MyName />
//   <MyComponents.List />
//   <MyComponents.CurrentDateTime />
//   <MyComponents.RandomNumber />
//   <MyComponents.RandomQuotes />
//   <MyComponents.CurrentDay />
//   <MyComponents.Header />
// <MyComponents.CustomButton />
//   <MyComponents.ConditionalMessage />
// </div>
