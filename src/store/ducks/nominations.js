const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";

export const addMovie = (title) => ({
  type: ADD_MOVIE,
  movieTitle: title,
});

export const removeMovie = (title, year) => ({
  type: REMOVE_MOVIE,
  title: title,
  year: year
});

const initialState = {
  nominations: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
          ...state, 
    nominations: state.nominations.concat({
        title: action.title,
        year: action.year
    }) };
    case REMOVE_MOVIE:
      return {
          ...state,
          nominations: state.nominations.filter(movie => (
              movie.title !== action.title
          ))
      };
    default:
      return state;
  }
};

export default reducer;