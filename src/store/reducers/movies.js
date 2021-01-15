import * as actionTypes from "../actions/actionTypes";

const initialState = {
  title: "",
  results: [],
  nominations: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_MOVIE_TITLE:
      return {
        ...state,
        title: action.titleToFind,
        loading: true
      };
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        nominations: state.nominations.concat(action.movie),
      };
    case actionTypes.REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id),
      };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        results: action.results,
        loading: true
      };
    case actionTypes.FETCH_MOVIE_FAIL:
      return {
        ...state,
        results: action.results,
        loading: false
      };
    case actionTypes.FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
