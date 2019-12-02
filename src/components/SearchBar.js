import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';

class SearchBar extends React.Component {
  createInput() {
    const { searchText, onSearchTextChange } = this.props;

    return (
      <label htmlFor="title" className="title">
            Search:
        <input
          id="title"
          type="text"
          placeholder="O que está procurando ?"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  render() {
    return (
      <div className="search-bar">
        {this.createInput()}
      </div>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,

  searchText: PropTypes.string.isRequired,
};
