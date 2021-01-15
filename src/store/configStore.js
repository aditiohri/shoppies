import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import nominationsReducer from "./ducks/nominations";
import movieQueryReducer from "./ducks/movieQuery";
import movieResultsReducer from "./ducks/movieResults";

const rootReducer = combineReducers({
  nominations: nominationsReducer,
  movieQuery: movieQueryReducer,
  movieResults: movieResultsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
