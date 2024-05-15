// src/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/budget">
            <img src="D:\PROGRAMMING\cashsavvy graphics\figma\icon_brain.png" alt="Budget" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/saving-goals">
            <img src="D:\PROGRAMMING\cashsavvy graphics\figma\icon_pig.png" alt="Saving Goals" />
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/expense">
            <img src="D:\PROGRAMMING\cashsavvy graphics\figma\icon_money.png" alt="Expense" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
