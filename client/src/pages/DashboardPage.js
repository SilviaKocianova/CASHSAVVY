import React from 'react';
import NavBar from '../components/NavBar';
import ButtonsContainer from '../components/ButtonsContainer';
import logo from '../cashsavvy_logo.png';
import dashboardBackground from '../assets/background.png'; // Correct path for the background image

const DashboardPage = () => {
  return (
    <div style={{ backgroundImage: `url(${dashboardBackground})`, backgroundSize: 'cover', minHeight: '100vh' }}> {/* Apply the background image */}
      <div className="navbar-container">
        <NavBar logo={logo} />
        <ButtonsContainer />
      </div>
    </div>
  );
};

export default DashboardPage;
