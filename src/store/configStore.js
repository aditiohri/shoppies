import { createStore, combineReducers } from "redux";
import nominationsReducer from "./ducks/nominations";
import movieQueryReducer from "./ducks/movieQuery";

const reducer = combineReducers({
  nominations: nominationsReducer,
  movieQuery: movieQueryReducer,
});

const store = createStore(reducer);

export default store;
