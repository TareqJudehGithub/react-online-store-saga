import React from "react";
import {connect } from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button-component"
import "../collection-item/collection-item.styles.scss";



const CollectionItem = ({ item, addItem }) => {
     const { name, price, imageUrl } = item;
     return (
          <div className="collection-item">
               <div
                    className="image"
                    style={{
                         backgroundImage:`url(${imageUrl})`                                      
                    }}
               >
               </div>
               
               <div className="collection-footer">
                    <span className="name">{name}</span>     
               </div>
               <div>
                    <span className="price">{price}</span>
               </div>
               <CustomButton
               inverted
               onClick={() => {addItem(item)}}>
               Add to Cart</CustomButton>
          </div>
     )
     
}
//creating addItem which will be add to CollectionItem class.
//
const mapDispatchToProps = (dispatch) => ({
     addItem: item => dispatch(addItem(item))
});
export default connect(null, mapDispatchToProps) (CollectionItem);