import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movies, loading: false }));
  }

  render() {
    const { movies } = this.state;
    if (this.state.loading) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <nav>
          <Link to="/movies/new"> ADICIONAR CARTÃO</Link>
        </nav>
      </div>
    );
  }
}

export default MovieList;
