import { createStore, combineReducer } from "redux";
import nominationsReducer from "./ducks/nominations";

const reducer = combineReducer({
    nominations: nominationsReducer
})

const store = createStore(reducer);

export default store;
