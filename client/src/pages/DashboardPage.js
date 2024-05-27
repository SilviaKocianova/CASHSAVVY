import React from 'react';
import BudgetButton from '../components/BudgetButton';
import ExpenseButton from '../components/ExpenseButton';
import SavingGoalsButton from '../components/SavinggoalsButton';
import NavBar from '../components/NavBar';
import logo from '../cashsavvy_logo.png';
import '../NavBar.css';

const DashboardPage = () => {
  return (
    <>
      <NavBar logo={logo} />

      <div className="buttons">
        <BudgetButton />
        <ExpenseButton />
        <SavingGoalsButton />
      </div>
    </>
  );
};

export default DashboardPage;
