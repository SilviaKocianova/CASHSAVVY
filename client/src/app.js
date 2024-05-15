import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Budget from './BudgetButton';
import SavingGoals from './SavinggoalsButton';
import Expense from './ExpenseButton';


function App() {

}

function componentStyle() {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#187bcd",
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/budget" element={<Budget />} />
        <Route path="/saving-goals" element={<SavingGoals />} />
        <Route path="/expense" element={<Expense />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );

}

export default App;


