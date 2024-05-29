import React from 'react';
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
      <MovieList />
      <TicketPurchaseForm />
    </div>
  );
};

export default HomePage;
