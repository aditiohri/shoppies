import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

import Paper from "@material-ui/core/Paper";
import ResultItem from "../../components/ResultItem/ResultItem";

function Results({
  loading,
  error,
  results,
  searchTitle,
  nominations,
  onNominateMovie,
}) {
  
  let movieList;
  let header;
  const disabledInfo = nominations.map((movie) => movie["imdbID"]);

  if (loading === true) {
    header = <h3>Let's find your favorite movies!</h3>;
  }

  if (error === true) {
    header = <h3>There was an error searching the movie database!</h3>;
  }

  if (results.length > 0) {
    header = <h3>Results for "{searchTitle}"</h3>;
    movieList = results.map((movie, id) => {
      const isDisabled =
        disabledInfo.includes(movie["imdbID"]) || disabledInfo.length === 5;

      return (
        <ResultItem
          key={id}
          movie={movie}
          onNominateMovie={onNominateMovie}
          disabled={isDisabled}
        />
      );
    });
  }

  if (loading === false) {
    header = <h3>There are no results for "{searchTitle}"</h3>;
  }

  return (
    <Paper>
      {header}
      <ul>{movieList}</ul>
    </Paper>
  );
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
