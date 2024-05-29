import React from 'react';
import MovieCard from './MovieCard';
import endgameImage from '../assets/images/Endgame.jpg';
import toyStoryImage from '../assets/images/Toy.webp';
import lionKingImage from '../assets/images/Leon.jpeg';
import frozenImage from '../assets/images/Frozen.jpg';
import jokerImage from '../assets/images/Joker.jpg';
import parasiteImage from '../assets/images/Parasitos.webp';
import nineteenSeventeenImage from '../assets/images/1917.jpg';
import '../styles/MovieList.css';

const movies = [
  { title: 'Avengers: Endgame', image: endgameImage, schedule: '10:00 AM, 1:30 PM, 5:00 PM, 8:30 PM' },
  { title: 'Toy Story 4', image: toyStoryImage, schedule: '11:00 AM, 2:30 PM, 6:00 PM, 9:30 PM' },
  { title: 'El Rey León', image: lionKingImage, schedule: '12:00 PM, 3:30 PM, 7:00 PM, 10:30 PM' },
  { title: 'Frozen II', image: frozenImage, schedule: '10:30 AM, 2:00 PM, 5:30 PM, 9:00 PM' },
  { title: 'Joker', image: jokerImage, schedule: '11:30 AM, 3:00 PM, 6:30 PM, 10:00 PM' },
  { title: 'Parásitos', image: parasiteImage, schedule: '12:30 PM, 4:00 PM, 7:30 PM, 11:00 PM' },
  { title: '1917', image: nineteenSeventeenImage, schedule: '1:00 PM, 4:30 PM, 8:00 PM, 11:30 PM' },
];

const MovieList = () => {
  return (
    <section id="carteleras">
      <h2>Carteleras de Películas</h2>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </section>
  );
};

export default MovieList;
