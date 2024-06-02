// DashboardPage.js

import React from 'react';
import NavBar from '../components/NavBar';
import ButtonsContainer from '../components/ButtonsContainer';
import logo from '../cashsavvy_logo.png';
import '../NavBar.css';

const DashboardPage = () => {
  return (
    <div className="navbar-container">
      <NavBar logo={logo} />
      <ButtonsContainer />
    </div>
  );
};

export default DashboardPage;
