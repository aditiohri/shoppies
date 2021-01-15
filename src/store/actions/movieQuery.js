import * as actionTypes from "./actionTypes";

export const fetchMovieInit = (results) => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    results: results,
  };
};

export const fetchMovieSuccess = (results) => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    results: results,
  };
};

export const fetchMovieError = () => {
  return {
    type: actionTypes.FETCH_MOVIE_ERROR,
  };
};
