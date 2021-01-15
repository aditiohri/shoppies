import * as actionTypes from "./actionTypes";
import getMoviesByTitle from "../../apiService/apiCall";

export const fetchMovieInit = () => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
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

export const fetchMovies = (searchTitle) => {
  return (dispatch) => {
    dispatch(fetchMovieInit());
    getMoviesByTitle(searchTitle)
      .then((movies) => {
        const fetchedMovies = [];
        for (let key in movies) {
          const { Title, Year } = movies[key];
          fetchedMovies.push({
            Title,
            Year,
          });
        }
        dispatch(fetchMovieSuccess(fetchedMovies));
      })
      .catch((err) => {
        dispatch(fetchMovieError(err));
      });
  };
};
