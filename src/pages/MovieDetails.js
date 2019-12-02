import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';
import './Rating.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      loading: true,
    };

    this.createRating = this.createRating.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((dados) => this.setState({
        movie: dados,
        loading: false,
      }));
  }

  createRating() {
    const { movie } = this.state;
    const { rating } = movie;
    const porcRating = ((rating / 5) * 100);
    return (
      <div className="size-rating">
        <div className="bar-rating">
          <div className="bar-rating-child" style={{ width: `${porcRating}%` }} />
        </div>
        <div className="text-rating">
          {`${porcRating}%`}
        </div>
      </div>
    );
  }

  render() {
    const { movie, loading } = this.state;
    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
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
              <p>
                {`Rating: ${rating}`}
                {this.createRating()}
              </p>
            </div>
            <div className="card-action">
              <Link to={`/movies/${id}/edit`}>Editar</Link>
              <Link to="/">Voltar</Link>
              <Link to="/" onClick={() => movieAPI.deleteMovie(this.props.match.params.id)}>
                Excluir
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};
