import React from "react";
import {CartItemContainer, ItemDetailsContainer, NameSpan, PriceSpan } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
     
     <CartItemContainer>
          <img src={imageUrl} alt="item" />
          <ItemDetailsContainer>
               <NameSpan>
               {name}
               </NameSpan>
               <PriceSpan>
               {quantity}x ${price}
               </PriceSpan>
          </ItemDetailsContainer>         
     </CartItemContainer> 
)
export default CartItem;