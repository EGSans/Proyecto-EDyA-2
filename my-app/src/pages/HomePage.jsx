import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde 'react-router-dom' para enlazar al formulario de registro
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
      <Link to="/register" className="register-button">Registrarse</Link>
      <MovieList />
      <TicketPurchaseForm />
    </div>
  );
};

export default HomePage;
