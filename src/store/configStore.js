import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import moviesReducer from "./reducers/movies";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
