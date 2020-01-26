import React from "react";
import CustomButton from "../custom-button/custom-button-component";
import "./cart-dropdown.styles.scss";
//113: Cart Item comp
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => (   //after the mapStateToProps.
     <div className="cart-dropdown">
          <div className="cart-items">
               {
                    cartItems.map(cartItem => (
                         <CartItem 
                         key={cartItem.id}
                         item={cartItem}
                    />
                    ))                    
               }
          </div>
          <CustomButton>CHECKOUT</CustomButton>
     </div>
)
const mapStateToProps = ({ cart: {cartItems } }) => ({ // we need cart: then from cart we need cartItem.
     cartItems
});
export default connect(mapStateToProps)(CartDropDown);
