import React, { Component } from 'react';
import Proppes from 'prop-types';
import abc from './SearchBar.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    onSearch: Proppes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSearch(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={abc.Searchbar}>
        <form onSubmit={this.handleSubmit} className={abc.SearchForm}>
          <button type="submit" className={abc.SearchFormButton}>
            <span className={abc.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={abc.SearchFormInput}
            type="text"
            autoComplete="off"
            // autoFocus="on"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
