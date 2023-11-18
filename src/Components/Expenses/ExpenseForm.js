import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // const handleInptChange = (idetifier, value) => {
  //   if (idetifier === "title") {
  //     setTitle(value);
  //     console.log(enteredTitle);
  //   } else if (idetifier === "amount") {
  //     setAmount(value);
  //     console.log(enteredAmount);
  //   } else if (idetifier === "date") {
  //     setDate(value);
  //     console.log(enteredDate);
  //   }
  // };
  const handleSubmitData = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmitData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
            // onChange={(event) => {
            //   handleInptChange("title", event.target.value);
            // }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={handleAmountChange}
            // onChange={(event) => {
            //   handleInptChange("amount", event.target.value);
            // }}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2010-01-01"
            max="2021-12-31"
            onChange={handleDateChange}

            // onChange={(event) => {
            //   handleInptChange("date", event.target.value);
            // }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

// const [userInput, setData] = useState({n
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

// const handleTitleChange = (event) => {
//   // setData({
//   //   ...userInput,
//   //   enteredTitle: event.target.value,
//   // });
//   setData((previousState) => {
//     return {
//       ...previousState,
//       enteredTitle: event.target.value,
//     };
//   });
// };

// const handleAmountChange = (event) => {
//   setData({
//     ...userInput,
//     enteredAmount: event.target.value,
//   });
// };
// const handleDateChange = (event) => {
//   setData({
//     ...userInput,
//     enteredDate: event.target.value,
//   });
// };
