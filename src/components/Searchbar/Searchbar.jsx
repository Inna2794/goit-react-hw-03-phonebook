import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../Searchbar/Searchbar.css';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  state = { query: '' };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  handleChange = evt => {
    const input = evt.currentTarget.value;
    this.setState({ query: input });
  };

  resetForm() {
    this.setState({ query: '' });
  }

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="search-btn">
            <span className="button-label">
              <BsSearch />
            </span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
