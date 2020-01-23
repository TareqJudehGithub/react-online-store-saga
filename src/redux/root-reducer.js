//where we keep our all reducers:
import {combineReducers} from "redux";  //to combine all reducers here

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
     user: userReducer,
     cart: cartReducer
})