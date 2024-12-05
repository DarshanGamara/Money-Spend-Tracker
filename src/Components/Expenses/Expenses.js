import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
       const [filteredYear, setFilteredYear] = useState("2024");

   const filteredChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
   }   

     const filteredExpenses = props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
     })

     const noExpenseStyle = {
          color: "red",
          textAlign: "center"
     }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
       <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && (
        <h2 style={noExpenseStyle}>No Expense Found In This Year</h2>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
}

export default Expenses;
