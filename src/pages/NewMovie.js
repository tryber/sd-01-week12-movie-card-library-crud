import React, { Component } from 'react';
import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { logicalExpression } from '@babel/types';
import { Loading } from '../components';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      movies: [],
      redirect: false,
    };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then = (
      this.setState({
        redirect: true,
      })
    );
  }


  render() {
    if (this.state.redirect) return <Loading />;
    return <MovieForm onSubmit={this.handleSubmit} />;
  }
}

export default NewMovie;
