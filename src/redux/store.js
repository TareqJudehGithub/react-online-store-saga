//required libraries
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";

//redux-persist
import {persistStore} from "redux-persist"

import rootReducer from "./root-reducer";

//To apply logger only in development:
 const middlewares = [];
 if(process.env.NODE_ENV === "development") {
      middlewares.push(logger);
 };

//creating the Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 

export const persistor = persistStore(store);

// export default { store, persistor };
