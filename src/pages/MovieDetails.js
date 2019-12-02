import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      loading: true,
    }
  }

  // movies.find((movie) => movie.id === this.props.match.url.charAt(this.props.match.url.length -1)

  componentDidMount() {
    movieAPI.getMovies().then((movies) => this.setState({ movie: movies.find((movie) => movie.id === Number(this.props.match.url.charAt(this.props.match.url.length - 1))), loading: false }))
  }


  render() {
    // Change the condition to check the state
    if (this.state.loading) {
      return (
        <Loading />
      );
    } else {
      const { title, storyline, imagePath, genre, rating, subtitle, id } = this.state.movie;
      return (
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img alt="Movie Cover" src={`../${imagePath}`} />
                <span className="card-title">{title}</span>
              </div>
              <div className="card-content">
                <p>{`Subtitle: ${subtitle}`}</p>
                <p>{`Storyline: ${storyline}`}</p>
                <p>{`Genre: ${genre}`}</p>
                <p>{`Rating: ${rating}`}</p>
              </div>
              <div className="card-action">
              </div>
              <nav className="links-block">
                <Link to={`/movies/${id}/edit`}>EDITAR</Link>
                <Link to={`/`}>VOLTAR</Link>
              </nav>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MovieDetails;
