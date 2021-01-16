import * as actionTypes from "./actionTypes";

export const addMovie = (movie) => ({
    type: actionTypes.ADD_MOVIE,
    movie: movie,
  });
  
  export const removeMovie = (imdbID) => ({
    type: actionTypes.REMOVE_MOVIE,
    imdbID: imdbID,
  });