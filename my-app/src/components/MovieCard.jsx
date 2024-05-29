import React from 'react';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="pelicula">
      <img src={movie.image} alt={movie.title} />
      <p>{movie.title}</p>
      <p>Horarios: {movie.schedule}</p>
      <button>Comprar boletos</button>
    </div>
  );
};

export default MovieCard;
