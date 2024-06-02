// ExpenseButton.js

import React from 'react';
import { Link } from 'react-router-dom';
import iconMoney from '../assets/icon_money.png';
import '../NavBar.css';

const ExpenseButton = () => {
  return (
    <Link to="/expense">
      <img src={iconMoney} alt="Expense" className="expense-icon"/>
    </Link>
  );
};

export default ExpenseButton;