import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ logo }) => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
   

    </nav>
  );
};

export default NavBar;
