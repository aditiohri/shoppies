import { createStore, combineReducers } from "redux";
import nominationsReducer from "./ducks/nominations";
import movieQueryReducer from "./ducks/movieQuery";
import movieResultsReducer from "./ducks/movieResults";

const reducer = combineReducers({
  nominations: nominationsReducer,
  movieQuery: movieQueryReducer,
  movieResults: movieResultsReducer
});

const store = createStore(reducer);

export default store;
