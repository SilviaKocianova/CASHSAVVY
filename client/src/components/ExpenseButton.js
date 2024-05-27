import React from 'react';
import { Link } from 'react-router-dom';
import iconMoney from '../assets/icon_money.png';

const ExpenseButton = () => {
  return (
    <Link to="/expense">
      <img src={iconMoney} alt="Expense" />
    </Link>
  );
};

export default ExpenseButton;
