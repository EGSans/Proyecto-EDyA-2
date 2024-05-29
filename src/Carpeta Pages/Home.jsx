import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [] // Aquí se almacenarían las películas obtenidas de algún servicio o API
    };
  }

  componentDidMount() {
    // Aquí podrías realizar una llamada a una API para obtener la lista de películas
    // Por ejemplo:
    // fetch('https://api.example.com/movies')
    //   .then(response => response.json())
    //   .then(data => this.setState({ movies: data }));
  }

  render() {
    return (
      <div>
        <h1>CineHub</h1>
        <div className="movie-list">
          {this.state.movies.map(movie => (
            <div key={movie.id} className="movie">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p>Duración: {movie.duration} minutos</p>
              <p>Director: {movie.director}</p>
            </div>
          ))}
          {this.state.movies.length === 0 && <p>Cargando películas...</p>}
        </div>
      </div>
    );
  }
}

export default Home;
