// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import MovieList from '../components/MovieList';
import TicketPurchaseForm from '../components/TicketPurchaseForm';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <div className="register-button-container">
        <Link to="/register" className="register-button">Registrarse</Link>
      </div>
      <MovieList />
      <TicketPurchaseForm />
    </div>
  );
};

export default HomePage;
