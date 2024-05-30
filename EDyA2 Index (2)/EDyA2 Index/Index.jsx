import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    { id: 1, title: 'Avengers: Endgame', img: 'Imgs/Endgame.jpg', times: ['10:00 AM', '1:30 PM', '5:00 PM', '8:30 PM'] },
    { id: 2, title: 'Toy Story 4', img: 'Imgs/Toy.webp', times: ['11:00 AM', '2:30 PM', '6:00 PM', '9:30 PM'] },
    { id: 3, title: 'El Rey León', img: 'Imgs/Leon.jpeg', times: ['12:00 PM', '3:30 PM', '7:00 PM', '10:30 PM'] },
    { id: 4, title: 'Frozen II', img: 'Imgs/Frozen.jpg', times: ['10:30 AM', '2:00 PM', '5:30 PM', '9:00 PM'] },
    { id: 5, title: 'Joker', img: 'Imgs/Joker.jpg', times: ['11:30 AM', '3:00 PM', '6:30 PM', '10:00 PM'] },
    { id: 6, title: 'Parásitos', img: 'Imgs/Parasitos.webp', times: ['12:30 PM', '4:00 PM', '7:30 PM', '11:00 PM'] },
    { id: 7, title: '1917', img: 'Imgs/1917.jpg', times: ['1:00 PM', '4:30 PM', '8:00 PM', '11:30 PM'] }
  ];

  const handleBuyTickets = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <header>
        <h1>Bienvenido a CineHub</h1>
        <img src="Imgs/Screenshot 2024-05-28 123747.png" alt="CineHub Logo" />
      </header>

      <section id="login">
        <h2>Iniciar Sesión</h2>
        <form action="login.php" method="post">
          <input type="text" name="usuario" placeholder="Usuario" required />
          <input type="password" name="contrasena" placeholder="Contraseña" required />
          <button type="submit">Ingresar</button>
        </form>
      </section>

      <section id="carteleras">
        <h2>Carteleras de Películas</h2>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onBuyTickets={handleBuyTickets} />
        ))}
      </section>

      {selectedMovie && <SeatSelection movie={selectedMovie} />}

      <footer>
        <p>© 2024 Cine CineHub. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function MovieCard({ movie, onBuyTickets }) {
  return (
    <div className="pelicula">
      <img src={movie.img} alt={movie.title} />
      <p>{movie.title}</p>
      <p>Horarios: {movie.times.join(', ')}</p>
      <button onClick={() => onBuyTickets(movie)}>Comprar boletos</button>
    </div>
  );
}

function SeatSelection({ movie }) {
  const [selectedSeats, setSelectedSeats] = useState(() => {
    const savedSeats = localStorage.getItem('selectedSeats');
    return savedSeats ? JSON.parse(savedSeats) : [];
  });
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const handleSelectSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleConfirmSelection = () => {
    // Simulación de confirmación de pago
    if (selectedSeats.length > 0) {
      setPaymentConfirmed(true);
    } else {
      alert('Por favor, selecciona al menos un asiento.');
    }
  };

  const seats = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="seat-selection">
      <h2>Selecciona tus asientos para {movie.title}</h2>
      <div className="seats">
        {seats.map((seat) => (
          <div
            key={seat}
            className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
            onClick={() => handleSelectSeat(seat)}
          >
            {seat}
          </div>
        ))}
      </div>
      {paymentConfirmed ? (
        <p>Pago confirmado. ¡Disfruta de la película!</p>
      ) : (
        <button onClick={handleConfirmSelection}>Confirmar Selección</button>
      )}
    </div>
  );
}

export default App;
