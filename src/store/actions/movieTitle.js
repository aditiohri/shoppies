import * as actionTypes from "./actionTypes";

export const saveMovieTitle = (inputValue) => {
  return { type: actionTypes.SAVE_MOVIE_TITLE, titleToFind: inputValue };
};
