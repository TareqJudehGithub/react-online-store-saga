import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"
// import toggleCartHidden from "../../redux/cart/cart.actions";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";

const CartIcon = ( { itemCount, history } ) => ( 
     <div className="cart-icon"
          // onClick={toggleCartHidden}
          onClick={() => history.push(`${"./checkout"}`)}
          >
          <ShoppingIcon className="shopping-icon"/>
          <span className="item-count">
          {itemCount}
          </span>
     </div>
)
// const mapDispatchToProps = (dispatch) => ({
//      toggleCartHidden: () => dispatch(toggleCartHidden())
// });

const mapStateToProps = createStructuredSelector ({

itemCount: selectCartItemsCount
})
export default withRouter(connect(mapStateToProps)(CartIcon));