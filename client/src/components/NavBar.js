// NavBar.js

import React from 'react';
import '../NavBar.css';

const NavBar = ({ logo }) => {
  return (
    <div className="navbar-logo">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default NavBar;
