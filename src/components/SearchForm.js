import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  submitSearch = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
    e.currentTarget.reset();
  };

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitSearch}>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <button type="submit" className="search-button">
          <i className="material-icons icn-search">search</i>
        </button>
      </form>
    );
  }
}

export default SearchForm;
