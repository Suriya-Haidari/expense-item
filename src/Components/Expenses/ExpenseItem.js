import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  let [newTitle, setTitle] = useState(title);
  const handleClick = () => {
    setTitle("Updated");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description ">
          <h2>{newTitle}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
        <button onClick={handleClick}>Change title</button>
      </Card>
    </li>
  );
};
export default ExpenseItem;
