import React, { Component } from "react";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services/movieAPI";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: []
    };
  }
  componentDidMount() {
    getMovies().then(data => {
      this.setState({
        loading: false,
        movies: data
      });
    });
  }
  render() {
    const { movies } = this.state;

    if (this.state.loading) return <Loading />;

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
