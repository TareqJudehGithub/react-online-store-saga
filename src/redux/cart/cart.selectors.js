import {createSelector} from "reselect";

//Input Selector:
//A functions that gets the whole state, and returns a part of it.. 1 layer deep.
const SelectCart = (state) => state.cart;
//Here, its going to get the whole reducer's state,  and we just need a small piece
//of it.. selectCart.

export const SelectCartItems = createSelector(
     [SelectCart],
     (cart) => cart.cartItems
);
export const selectCartItemsCount = createSelector(
     [SelectCartItems],
     (cartItems) =>
     ( cartItems.reduce((accumulatedQuantity, cartItem) =>
     accumulatedQuantity + cartItem.quantity, 0))
);