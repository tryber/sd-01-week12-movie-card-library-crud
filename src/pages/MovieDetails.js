import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.setState((state) => (
      { movie: [...state.movie, this.props.value] }));
  }

  render() {
    // Change the condition to check the state
    if (this.state.movie.length === 0) return <Loading />;

    const {
      title,
      storyline,
      imagePath,
      genre,
      rating,
      subtitle,
    } = this.state.movie;

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
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
