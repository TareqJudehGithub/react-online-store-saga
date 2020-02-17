import React from "react";

import {ReactComponent as Logo} from "../../assets/crown.svg";
//cart
import CartIcon from "../cart-icon/cart-icon.component";
// import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {connect} from "react-redux";

//selectors
import {createStructuredSelector} from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

//188.4
import {signOutStart} from '../../redux/user/user.actions';
//styles components:
import {HeaderContainer, LogoContainer, OptionsContainer,
OptionLink} from "./header.styles";

const Header = ({ currentUser, signOut }) => ( 
     <HeaderContainer>
          <LogoContainer to="/">
               <Logo />
          </LogoContainer>
          <OptionsContainer>
               <OptionLink to="/shop">
                SHOP
               </OptionLink>
               {/* <Link className="option" to="/shop">
                CONTACT
               </Link> */}
               {
                    currentUser 
                    ?
                    (<OptionLink as="div"
                    //188.6
                    onClick={signOut}>  
                    SIGN OUT 
                    </OptionLink>)
                    :
                    (
                    <OptionLink
                    to="/signin">
                    SIGN IN
                    </OptionLink>
                    )
               }
               <CartIcon>
                   
               </CartIcon>
          </OptionsContainer>
       
     </HeaderContainer>
)
//setting up redux:

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  
});
//188.5
const mapDispatchToProps = (dispatch) => ({
     signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
