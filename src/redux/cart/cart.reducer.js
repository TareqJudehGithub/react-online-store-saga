import CartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.util";
import {removeItemFromCart} from "./cart.util";

const INITIAL_STATE = {
     hidden: true,
     cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case CartActionTypes.TOGGLE_CART_HIDDEN:
               return{
                    ...state,
                    hidden: !state.hidden
               };
          case CartActionTypes.ADD_ITEM:
               return{
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                    //old cart item + the added new ones.
               };
               //remove item arrow in checkout-item.js
               case CartActionTypes.REMOVE_ITEM:
               return{
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
               }
          case CartActionTypes.CLEAR_ITEM_FROM_CART:
               return {
                    ...state,              
                   cartItems: state.cartItems.filter(
                        cartItem => 
                             cartItem.id !== action.payload.id
                   )
               };
     //189.5
          case CartActionTypes.CLEAR_CART:
               return{
                    ...state,
                    cartItems: []
               }
          default:
               return state;
     }
}
export default cartReducer;