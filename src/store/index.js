import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import country_reducer from "./country_reducer";
const allreducer = combineReducers({ country_reducer });
const store = createStore(allreducer, applyMiddleware(thunk));
export default store;
