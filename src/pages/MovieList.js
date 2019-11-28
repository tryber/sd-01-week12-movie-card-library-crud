import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import { resolve } from 'url';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((dados) => this.setState((state) => (
        {
          movies: [...state.movies, dados],
          loading: !state.loading,
        })))
      .catch(console.log('err'));
  }

  render() {
    console.log(this.state);
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div className="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
