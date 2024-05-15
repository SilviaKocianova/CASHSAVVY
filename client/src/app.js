import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import './NavBar.css';
import Budget from './BudgetButton';
import SavingGoals from './SavinggoalsButton';
import Expense from './ExpenseButton';



function componentStyle() {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    
  };

  function componentStyle() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar-container">
          <NavBar />
        </div>
        <Routes>
          <Route path="/budget" element={<Budget />} />
          <Route path="/saving-goals" element={<SavingGoals />} />
          <Route path="/expense" element={<Expense />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
}



function App() {
  return (
    <BrowserRouter>
      <div style={componentStyle()}>
        <NavBar />
        <Routes>
          <Route path="/budget" element={<Budget />} />
          <Route path="/saving-goals" element={<SavingGoals />} />
          <Route path="/expense" element={<Expense />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;


