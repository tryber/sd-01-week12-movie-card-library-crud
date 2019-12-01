import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loader">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default Loading;
