import React from 'react';
import logo from '../assets/images/Screenshot.png';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <h1>Bienvenido a CineHub</h1>
      <img src={logo} alt="CineHub Logo" />
    </header>
  );
};

export default Header;
