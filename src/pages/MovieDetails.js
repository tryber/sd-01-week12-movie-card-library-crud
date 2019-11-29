import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      redirect: false,
    };
    this.byebyeMovie = this.byebyeMovie.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie }));
  }

  byebyeMovie() {
    const { match } = this.props;
    const { id } = match.params;
    movieAPI.deleteMovie(id)
      .then(this.setState({ redirect: true }));
  }

  render() {
    const { movie, redirect } = this.state;
    const { match } = this.props;
    const { id } = match.params;

    if (movie.length === 0) return <Loading />;

    if (redirect) return <Redirect to="/" />;

    return (
      <div className="row">
        <div className="col s12 m7">
          <div className="card" />
          <FormComponent movie={movie} id={id} />
          <div className="card-action">
            <Link to={`/movies/${id}/edit`}>
            EDITAR
            </Link>
            <Link to="/">
            VOLTAR
            </Link>
            <Link to={{ state: { movie } }} onClick={this.byebyeMovie}>
            DELETAR CARTÃO
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function FormComponent(props) {
  const { movie } = props;
  const {
    title, storyline, imagePath, genre, rating, subtitle,
  } = movie;
  return (
    <>
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
    </>
  );
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

FormComponent.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
