import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((data) =>
      this.setState({
        status: '',
        movie: data,
      }),
    );
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((data) =>
      this.setState({
        shouldRedirect: true,
        movie: data,
      }),
    );
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;

    if (status === 'loading') return <Loading />;

    return <MovieForm movie={movie} onSubmit={this.handleSubmit} />;
  }
}

export default EditMovie;

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: {
      id: PropTypes.number,
    },
  }).isRequired,
};
