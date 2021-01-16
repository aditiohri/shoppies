import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Paper from "@material-ui/core/Paper";
import ResultItem from "../../components/ResultItem/ResultItem";

class Results extends Component {
  render() {
    const disabledInfo = this.props.nominations.map((movie) => movie["imdbID"]);

    let movieList;
    let header;

    if (this.props.loading === true) {
      header = <h3>Let's find your favorite movies!</h3>;
    }

    if (this.props.error === true) {
      header = <h3>There was an error searching the movie database!</h3>;
    }

    if (this.props.results.length > 0) {
      header = <h3>Results for "{this.props.searchTitle}"</h3>;
      movieList = this.props.results.map((movie, id) => {
        
        const isDisabled =
          disabledInfo.find((id) => id === movie["imdbID"]) ===
            movie["imdbID"] || disabledInfo.length === 5;

        return (
          <ResultItem
            key={id}
            movie={movie}
            onNominateMovie={this.props.onNominateMovie}
            disabled={isDisabled}
          />
        );
      });
    }

    if (this.props.loading === false) {
      header = <h3>There are no results for "{this.props.searchTitle}"</h3>;
    }

    return (
      <Paper>
        {header}
        <ul>{movieList}</ul>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchTitle: state.movies.title,
    results: state.movies.results,
    error: state.movies.error,
    loading: state.movies.loading,
    nominations: state.movies.nominations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { onNominateMovie: (movie) => dispatch(actions.addMovie(movie)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
