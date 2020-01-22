//where we keep our overall reducers:
import {combineReducers} from "redux";  //to combine all reducers here

import userReducer from "./user/user.reducer";

export default combineReducers({
     user: userReducer
})