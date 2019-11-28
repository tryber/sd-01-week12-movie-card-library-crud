import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

    <Router>
      <div>Movie Card Library CRUD</div>
    </Router>
      
    );
  }
}
