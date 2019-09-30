import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger';
//add middleware to my store so whenever a dispatch/action gets fired I can catch them and display them from the logger
import rootReducer from './root-reducer';

const middlewares = [logger];

//creates the store and adds all of the middlewares because of the spread operator
//holds the root reducer which holds all of the individual reducers
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;