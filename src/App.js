import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Switch from './components/Switch';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

    <BrowserRouter>
      <Switch />
    </BrowserRouter>
      
    );
  }
}
