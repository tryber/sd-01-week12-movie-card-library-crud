import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movie: [],
      loading: true,
     };
  }

  componentDidMount(){
    movieAPI.getMovies()
    .then((data) => this.setState({movie: data, loading: false}))
  }

  render() {
    const { movies } = this.state;
    // Render Loading here if the request is still happening

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
