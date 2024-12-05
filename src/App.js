import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';
import './App.css';


 const DUMMY_EXPENSES = [
   {
     id: "e1",
     title: "Smart Tv",
     amount: 15999,
     date: new Date(2023, 7, 14),
   },
   {
     id: "e2",
     title: "mobile",
     amount: 7999,
     date: new Date(2024, 5, 12),
   },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 3946,
     date: new Date(2024, 3, 5),
   },
   {
     id: "e4",
     title: "New Desk ",
     amount: 2499,
     date: new Date(2025, 5, 12),
   },
 ];

   function App() {
       const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

      const addExpenseHandler = (expense) => {
          setExpenses((prevExpenses) => {
               return [expense, ...expenses];
          });
      }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
