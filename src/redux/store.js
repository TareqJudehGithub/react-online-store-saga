//required libraries
import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";

//179.1 saga. 
//replacing createSagaMiddleware with thunk (thunk is removed).
import createSagaMiddleware from "redux-saga";

//179.5
// import {fetchCollectionsStart} from "./shop/shop.sagas";

//182.
import rootSaga from "./root-saga";
//redux-persist
import {persistStore} from "redux-persist";

import rootReducer from "./root-reducer";


//179.2
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
//next step, in /redux/shop folder, create a new saga file:


//To apply logger only in development:
//  const middlewares = [thunk];
 if(process.env.NODE_ENV === "development") {
      middlewares.push(logger);
 };

//creating the Store:
export const store = createStore(rootReducer, applyMiddleware(...middlewares)) 

//179.5
// sagaMiddleware.run(fetchCollectionsStart);
//next in shop.component:

//182.
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


