//required libraries
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

//setting up middlewares

//the middlewares that the store is expecting from redux is going to be an array:
const middlewares = [logger];  // logger in the array is the function from redux-logger.

//creating our store.
const store = createStore(rootReducer, applyMiddleware(...middlewares)) // or (logger)  spread the array values.w
export default store;