import {combineReducers} from "redux"; 

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReduce from "./directory/directory-reducer";
import shopReducer from './shop/shop.reducer';

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
     cart: cartReducer,
     directory: directoryReduce,
     shop: shopReducer
})
 export default persistReducer(persistConfig, rootReducer);
