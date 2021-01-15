import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import ResultItem from "../../components/ResultItem/ResultItem";

class Results extends Component {

  render() {
    let movieList = this.props.error ? (
      <p>There was an error searching the movie database!</p>
    ) : (
      <p>Loading...</p>
    );

    if (this.props.results) {
      movieList = this.props.results.map((movie, id) => (
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
    searchTitle: state.movies.title,
    results: state.movies.results
  }
}

export default connect(mapStateToProps)(Results);
