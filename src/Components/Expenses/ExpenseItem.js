import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//import { useState } from "react";


function ExpenseItem(props) {
    
  return ( 
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
