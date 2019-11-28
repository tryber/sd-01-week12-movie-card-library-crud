import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: '',
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((dados) => this.setState({
        movie: dados,
        loading: false,
      }));
  }

  render() {
    const { movie, loading } = this.state;
    console.log(movie);
    // Change the condition to check the state
    if (loading) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = movie;

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
              <Link to={`${this.props.match.params.id}/edit`}>Editar</Link>
              <Link to="/">Voltar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
