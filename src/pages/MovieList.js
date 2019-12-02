import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      searchText: '',
    };

    this.filterList = this.filterList.bind(this);
    this.changeHandlerSearch = this.changeHandlerSearch.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((dados) => this.setState({
        movies: dados,
        loading: false,
      }));
  }

  changeHandlerSearch(event) {
    this.setState({ searchText: event.target.value });
  }

  filterList() {
    const { movies, searchText } = this.state;
    let arrMovies = movies;
    if (searchText !== '') {
      arrMovies = movies.filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)
      ));
    }
    return arrMovies;
  }

  render() {
    const { loading, searchText } = this.state;
    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.changeHandlerSearch(e)}
        />
        <div className="movie-list">
          {this.filterList().map((movie) => <MovieCard key={movie.title} movie={movie} />)}
          <Link className="row card movie-card add-cart" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
      </div>
    );
  }
}

export default MovieList;
