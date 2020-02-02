//where we keep our all reducers:
import {combineReducers} from "redux";  //to combine all reducers here

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

//redux-persist
import {persistReducer} from "redux-persist";
//the type of storage we want:
import storage from "redux-persist/lib/storage";

//Defining a new persistConfig for storage:
const persistConfig = {
     key: "root",  
     storage,   
     whitList: ["cart"] 

//declaring the rootReducer:
}
const rootReducer = combineReducers({
     user: userReducer,
     cart: cartReducer

})
 export default persistReducer(persistConfig, rootReducer);



//This is the old rootReducer before using redux-persist
// export default combineReducers({
//      user: userReducer,
//      cart: cartReducer
// })