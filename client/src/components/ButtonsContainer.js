// ButtonsContainer.js

import React from 'react';
import BudgetButton from './BudgetButton';
import ExpenseButton from './ExpenseButton';
import SavinggoalsButton from './SavinggoalsButton';
import '../NavBar.css';

const ButtonsContainer = () => {
  return (
    <div className="center">
      <BudgetButton />
      <ExpenseButton />
      <SavinggoalsButton />
    </div>
  );
};

export default ButtonsContainer;
