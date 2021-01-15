import { createStore, combineReducer } from "redux";
import nominationsReducer from "./ducks/nominations";
import movieQueryReducer from "./ducks/movieQuery";

const reducer = combineReducer({
  nominations: nominationsReducer,
  movieQuery: movieQueryReducer,
});

const store = createStore(reducer);

export default store;
