import React from 'react';
//styled component:

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSingOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckOutPage from "./pages/checkout/checkout.component";

//selectors:
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selectors";

//redux needed library
import { connect } from "react-redux";

//spinner animation
import withSpinner from ".//components/with-spinner/with-spinner.component";

//187 .3
import {CheckUserSession} from "./redux/user/user.actions";

import './App.css';


const HomePageWithSpinner = withSpinner(HomePage);

class App extends React.Component {
state = {isLoading: true};

//to close subscription when unmounting to avoide memo leak
unsubscribeFromAuth = null
  
//1. DidMount() opens the subscription
componentDidMount(){
//187.5
const { checkSession } = this.props;
checkSession();
 
  setTimeout(() => {
    this.setState({isLoading: false});
  }, 500)
}

//2. Unmount() closes the subscription
componentWillUnmount() {
  this.unsubscribeFromAuth();
}
  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Header />
          <Switch> 
            <Route exact path="/"
            render={(props) =>
            <HomePageWithSpinner isLoading={isLoading} {...props}/>}/>        
        
            <Route path="/shop" component={ShopPage}/>
            
            <Route path="/checkout" component={CheckOutPage}/>

            <Route exact path="/signin" render={() =>
            this.props.currentUser
            ?
            (<Redirect to ="/"/>)
            :
            (<SignInandSingOut />)
            } />
         </Switch>
        
      </div>
    );
  }
}
const mapToStateProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
});
//187.4
const mapDispatchToProps = (dispatch) => ({
  checkSession: () => dispatch(CheckUserSession())
})

export default connect(mapToStateProps, mapDispatchToProps)(App);
