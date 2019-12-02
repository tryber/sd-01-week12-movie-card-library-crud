import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie)
    this.setState({shouldRedirect: true})
  }

  componentDidMount() {
    { movieAPI.getMovies().then((movies) => this.setState({ movie: movies.find((movie) => movie.id === Number(this.props.match.url.charAt(this.props.match.url.length - 6))), status: false })) }
  }

  render() {
    // console.log(this.state.movie)
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return (
      <Redirect to='/' />
      )
    }

    if (status === 'loading') {
      return (
        <Loading />
      );
    }

    return (
      <MovieForm movie={movie} onSubmit={this.handleSubmit} />
    );
  }
}

export default EditMovie;
