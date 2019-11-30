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
    movieAPI.getMovies().then((data) =>
      this.setState({
        movies: data,
        loading: false,
      }),
    );
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        <header>
          <h1 className="header">Rotten Tomatoes</h1>
        </header>
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
        <footer>
          <Link to="/movies/new" className="btn">
            ADICIONAR CARTÃO
          </Link>
        </footer>
      </div>
    );
  }
}

export default MovieList;
