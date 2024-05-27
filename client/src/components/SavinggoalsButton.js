import React from 'react';
import { Link } from 'react-router-dom';
import iconPig from '../assets/icon_pig.png';

const SavinggoalsButton = () => {
  return (
    <Link to="/savinggoals">
      <img src={iconPig} alt="Expense" />
    </Link>
  );
};

export default SavinggoalsButton;
