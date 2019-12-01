import React, { Component } from 'react';
import './animation.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        Carregando
        <span className="dot dot1">.</span>
        <span className="dot dot2">.</span>
        <span className="dot dot3">.</span>
      </div>
    );
  }
}

export default Loading;
