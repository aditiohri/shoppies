const FIND_MOVIE_TITLE = "FIND_MOVIE_TITLE";

export const findMovieTitle = (inputValue) => ({
  type: FIND_MOVIE_TITLE,
  titleToFind: inputValue,
});

const initialState = {
  title: "",
  results: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_MOVIE_TITLE:
        return {
            ...state,
            title: action.titleToFind
        }
    default:
      return state;
  }
};

export default reducer
