const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";

export const addMovie = (title) => ({
  type: ADD_MOVIE,
  movieTitle: title,
});

export const removeMovie = (title) => ({
  type: REMOVE_MOVIE,
  movieTitle: title,
});

const initialState = {
  nominations: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
          ...state, 
    nominations: state.nominations.concat(action.movieTitle) };
    case REMOVE_MOVIE:
      return {
          ...state,
          nominations: state.nominations.filter(movie => (
              movie.title !== action.movieTitle
          ))
      };
    default:
      return state;
  }
};

export default reducer;