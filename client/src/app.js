import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Budget from './BudgetButton';
import SavingGoals from './SavinggoalsButton';
import Expense from './ExpenseButton';



function componentStyle() {
  return {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: "#187bcd",
    
  };

  function componentStyle() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/budget" element={<Budget />} />
          <Route path="/saving-goals" element={<SavingGoals />} />
          <Route path="/expense" element={<Expense />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
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


