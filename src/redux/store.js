//required libraries
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

//redux-persist
import {persistStore} from "redux-persist"

import rootReducer from "./root-reducer";

//setting up middlewares:
const middlewares = [logger];  

//creating the Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 

export const persistor = persistStore(store);

// export default { store, persistor };