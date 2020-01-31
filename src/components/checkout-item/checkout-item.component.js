import React from "react";
import "./checkout-item.styles.scss";
//124. we need to bind our new action to the component here:
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";


const CheckoutItem = ({ cartItem, clearItem, increaseQuantity, decreaseQuantity }) => {
     const { name, imageUrl, price, quantity } = cartItem;
     return (
             //passing the whole item
               <div className="checkout-item">
                    <div className="image-container">
                         <img src={imageUrl} alt="item"/>
                    </div>
                    <span className="name">{name}</span>
                    <span className="quantity">

                    {/* quantity arrows   */}
                         <div className="arrow"
                         onClick={() => decreaseQuantity(cartItem)}>
                              &#8826;
                         </div>

                         <span className="value">{quantity}</span>

                         <div className="arrow"
                         onClick={() => increaseQuantity(cartItem)}>
                              &#8827;
                         </div>
                    </span>

                    <span className="price">{price}</span>
                    <div className="remove-button"
                    onClick={() => clearItem(cartItem)}> &#10008;</div>
               </div>       
     )
}
const mapDispatchToProps = (dispatch) => ({
     clearItem: item => dispatch(clearItemFromCart(item)),
     increaseQuantity: item => dispatch(addItem(item)),
     decreaseQuantity: item => dispatch(removeItem(item))
     
})
 export default connect(null, mapDispatchToProps)(CheckoutItem);
