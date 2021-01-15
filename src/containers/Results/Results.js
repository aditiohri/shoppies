import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import ResultItem from "../../components/ResultItem/ResultItem";
import * as actions from "../../store/actions/index";

class Results extends Component {
  render() {
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
      movieList = this.props.results.map((movie, id) => (
        <ResultItem key={id} id={id} title={movie.Title} year={movie.Year} onNominateMovie={this.props.onNominateMovie} />
      ));
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
    nominations: state.movies.nominations,
    error: state.movies.error,
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { onNominateMovie: (movie) => dispatch(actions.addMovie(movie)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
