import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({
        loading: false,
        movies: data,
      }));
  }

  render() {
    const { movies } = this.state;

    if (this.state.loading) return <Loading />;

    return (
      <div>
        <div className="movie-list">
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        </div>
        <div className="wrapper">
          <Link to="/movies/new" className="my-super-cool-btn">
            <div className="dots-container">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
            <span>ADICIONAR CARTÃO</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
