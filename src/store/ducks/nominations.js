const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  movie: movie
});

export const removeMovie = (id) => ({
  type: REMOVE_MOVIE,
  id: id
  
});

const initialState = {
  movies: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
          ...state, 
    movies: state.movies.concat(action.movie) };
    case REMOVE_MOVIE:
      return {
          ...state,
          movies: state.movies.filter(movie => (
              movie.id !== action.id
          ))
      };
    default:
      return state;
  }
};

export default reducer;