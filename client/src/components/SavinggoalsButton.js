// SavinggoalsButton.js

import React from 'react';
import { Link } from 'react-router-dom';
import iconPig from '../assets/icon_pig.png';
import '../NavBar.css';

const SavinggoalsButton = () => {
  return (
    <Link to="/savinggoals">
      <img src={iconPig} alt="SavingGoals" className="savinggoals-icon"/>
    </Link>
  );
};

export default SavinggoalsButton;
