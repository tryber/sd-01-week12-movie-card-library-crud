import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieForm, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id)
      .then((dados) => this.setState({
        movie: dados,
        status: '',
      }));
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie)
      .then((dados) => this.setState({
        movie: dados,
        shouldRedirect: true,
      }));
  }

  render() {
    console.log(this.props);
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading />;
    }

    return (
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.object.isRequired,
};
