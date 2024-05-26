import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import './NavBar.css';
import Budget from './BudgetButton';
import SavingGoals from './SavinggoalsButton';
import Expense from './ExpenseButton';
import logo from './cashsavvy_logo.png';



function componentStyle() {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    
  };


}


export const App = () => {
  return (
    <BrowserRouter>
      <div style={componentStyle()}>
        <NavBar logo={logo} />
        <Routes>
          <Route path="/BudgetPage" element={<Budget />} />
          <Route path="/Saving-goalsPage" element={<SavingGoals />} />
          <Route path="/ExpensePage" element={<Expense />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;


