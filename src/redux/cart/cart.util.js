export const addItemToCart = (cartItems, cartItemToAdd) => {
     
     const existingCartItem = cartItems.find(cartItem =>
          
          cartItem.id === cartItemToAdd.id
          );
    
     if(existingCartItem) {
          return cartItems.map(cartItem =>                 
                    cartItem.id === cartItemToAdd.id
                    ?
                    {...cartItem, quantity: cartItem.quantity +1 }
                    :
                    cartItem
          )        
     }
     else{
          return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
     }
     
     
};
//checkout-item arrows:  (remove)
export const removeItemFromCart = (cartItems, cartItemsToRemove) => {
    const existingCartItem = cartItems.find(cartItem =>
     cartItem.id === cartItemsToRemove.id)
     
     //if the quantity is 1, then remove it:
     if (existingCartItem.quantity === 1){
          return cartItems.filter(cartItem =>

               cartItem.id !== cartItemsToRemove.id)
     }
     //if the quantity > 1:
     else{
          return cartItems.map(cartItem =>
              
               cartItem.id === cartItemsToRemove.id
               ?
               {...cartItem, quantity: cartItem.quantity - 1 }
               :
               cartItem
               )
     }
}
