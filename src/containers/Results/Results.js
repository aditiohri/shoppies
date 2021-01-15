import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import ResultItem from "../../components/ResultItem/ResultItem";

class Results extends Component {
  state = {
    results: [],
    loading: true,
    error: false,
  };

  componentDidMount() {
    fetch(
      `http://www.omdbapi.com/?s=Lord&type=movie&apikey=${process.env.REACT_APP_APIKEY}`
    )
      .then((response) => response.json())
      .then((movies) => {
        const fetchedMovies = [];
        for (let key in movies.Search) {
          const { Title, Year } = movies.Search[key];
          fetchedMovies.push({
            Title,
            Year,
          });
        }
        this.setState({ results: fetchedMovies, loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false, error: true });
      });
  }
  render() {
    let movieList = this.state.error ? (
      <p>There was an error searching the movie database!</p>
    ) : (
      <p>Loading...</p>
    );

    if (this.state.results.length > 0) {
      movieList = this.state.results.map((movie, id) => (
        <ResultItem id={id} title={movie.Title} year={movie.Year} />
      ));
    }
    return (
      <Paper>
        <h3>Results for {this.props.searchTitle}</h3>
        <ul>{movieList}</ul>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTitle: state.movies.title
  }
}

export default connect(mapStateToProps)(Results);
