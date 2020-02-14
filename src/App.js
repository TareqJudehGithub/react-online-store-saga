import React from 'react';
//styled component:

import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

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
import { setCurrentUser } from "./redux/user/user.actions"

//spinner animation
import withSpinner from ".//components/with-spinner/with-spinner.component";

import './App.css';


const HomePageWithSpinner = withSpinner(HomePage);

class App extends React.Component {

state = {isLoading: true}

//to close subscription when unmounting to avoide memo leak
unsubscribeFromAuth = null
  
//1. DidMount() opens the subscription
componentDidMount(){

  // for redux, desctructure CurrentUser off Props.
  const { CurrentUser } = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  
    if (userAuth) {
      const userRef =  await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {  //where we going to get the data stored for this user.
      //  this.setState({  // for state (before redux)
        CurrentUser({      
           id: snapShot.id,
           ...snapShot.data()        
        });   
      });
    }
      CurrentUser(userAuth);
  });
 
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

const mapDispatchToProps = (dispatch) => ({
  CurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapToStateProps, mapDispatchToProps)(App);
