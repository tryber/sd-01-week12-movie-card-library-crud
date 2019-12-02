import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    }
  }

  componentDidMount() {
    { movieAPI.getMovies().then((movies) => this.setState({ movies: movies, loading: false })) }
  }

  render() {
    const { movies } = this.state;
    if (this.state.loading) {
      return (
        <div>
          <Loading />
        </div>
      )
    } else {
      return (
        <div className="movie-list">  
          {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
        <nav>
        <Link to='/movies/new'> ADICIONAR CARTÃO</Link>
        </nav>
        </div>
      )
    } 
  }
}

export default MovieList;
