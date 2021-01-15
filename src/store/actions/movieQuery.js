import * as actionTypes from "./actionTypes";
import getMoviesByTitle from "../../apiService/apiCall";

export const fetchMovieSuccess = (results) => {
  return {
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    results: results,
  };
};

export const fetchMovieFail = (results) => {
  return {
    type: actionTypes.FETCH_MOVIE_FAIL,
    results: results
  };
};

export const fetchMovieError = () => {
  return {
    type: actionTypes.FETCH_MOVIE_ERROR,
  };
};

export const fetchMovies = (searchTitle) => {
  return (dispatch) => {
    getMoviesByTitle(searchTitle)
      .then((movies) => {
        const fetchedMovies = [];
        for (let key in movies) {
          const { Title, Year, imdbID } = movies[key];
          fetchedMovies.push({
            Title,
            Year,
            imdbID
          });
        }
        if (fetchedMovies.length > 0) {
          return dispatch(fetchMovieSuccess(fetchedMovies));
        } else {
          return dispatch(fetchMovieFail(fetchedMovies));
        }
      })
      .catch((err) => {
        return fetchMovieError();
      });
  };
};
