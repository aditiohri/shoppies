import * as actionTypes from "./actionTypes";

export const addMovie = (movie) => ({
    type: actionTypes.ADD_MOVIE,
    movie: movie,
  });
  
  export const removeMovie = (id) => ({
    type: actionTypes.REMOVE_MOVIE,
    id: id,
  });