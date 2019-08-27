import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import ImageList from "./components/ImageList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (input = "sunset") => {
    const APP_ID =
      "698e2d60078ba0729212c88191a89e2362e4fa16f3254b182ecdf2b9d39e37d0";
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&per_page=20&query=${input}&client_id=${APP_ID}`
      )
      .then(data => {
        this.setState({ imgs: data.data.results, loading: false });
        console.log(data.data);
      })
      .catch(error => console.log("Something went wrong: " + error));
  };

  render() {
    return (
      <Fragment>
        <header>
          <div className="inner-header">
            <h2 className="main-title">Search Unsplash API</h2>
            <SearchForm onSearch={this.performSearch} />
          </div>
        </header>
        <div className="main-content">
          {this.state.loading ? (
            <p>loading</p>
          ) : (
            <ImageList data={this.state.imgs} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default App;
