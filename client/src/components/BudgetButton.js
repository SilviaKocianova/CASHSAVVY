// BudgetButton.js

import React from 'react';
import { Link } from 'react-router-dom';
import iconBrain from '../assets/icon_brain.png';
import '../NavBar.css';

const BudgetButton = () => {
  return (
    <Link to="/budget">
      <img src={iconBrain} alt="Budget" className="button-icon"/>
    </Link>
  );
};

export default BudgetButton;





