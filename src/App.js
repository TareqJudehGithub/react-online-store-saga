import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss"
import ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSingOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth} from "./firebase/firebase.utils"
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      currentUser: null
    }
  }
//to close subscription when unmounting to avoide memo leak
unsubscribeFromAuth = null
  
//1. DidMount() opens the subscription
componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user});
    console.log(user);
  })
}
//2. Unmount() closes the subscription
componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <Header  currentUser={this.state.currentUser}/>
        {/* <HomePage /> */}
          <Switch> 
         <Route  exact path="/" component={HomePage}/>   
         <Route path="/shop" component={ShopPage}/>
         <Route path="/signin" component={SignInandSingOut}/>
         </Switch>
         
      </div>
    );
  }
 
}
export default App;
