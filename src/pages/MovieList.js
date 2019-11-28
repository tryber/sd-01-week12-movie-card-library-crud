import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
import NewMovie from './NewMovie';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((movies) => this.setState((state) => (
        { movies: Object.assign(state.movies, movies) })));
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    if (movies.length === 0) return <Loading />;

    return (
      <div className="movie-list">
        <nav>
          <Link to="/movies/new" component={NewMovie}>
            ADICIONAR CARTÃO
          </Link>
        </nav>
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
