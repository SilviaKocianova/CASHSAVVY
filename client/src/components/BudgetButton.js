import React from 'react';
import { Link } from 'react-router-dom';
import iconBrain from '../assets/icon_brain.png';

const BudgetButton = () => {
  return (
    <Link to="/budget">
      <img src={iconBrain} alt="Budget" />
    </Link>
  );
};

export default BudgetButton;
