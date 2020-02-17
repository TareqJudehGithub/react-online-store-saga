import UserActionTypes from "./user.types";
const INITIAL_STATE = {
     currentUser: null,
     error: null
}
// state = INITIAL_STATE is the default state value.. which is null our example.
const userReducer = (state = INITIAL_STATE, action) =>{ 
     switch(action.type){ 
          case UserActionTypes.SIGN_IN_SUCCESS:
               return{
                    ...state,   
                    currentUser: action.payload,
                    error: null
               }
          //188.3   
          case UserActionTypes.SIGN_OUT_SUCCESS:
               return{
                    ...state,   
                    currentUser: null,
                    error: null
               }
          case UserActionTypes.SIGN_IN_FAILURE:
          case UserActionTypes.SIGN_OUT_FAILURE:
               return {
                    ...state,
                    error: action.payload
               }
          default:
               return state;       
     }
}
export default userReducer;
