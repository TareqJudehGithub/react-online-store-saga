import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss"
import ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSingOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
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
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    // createUserProfileDocument(user);
    // this.setState({ currentUser: user});
    // console.log(user);

    //IF a user signs in, we'll chk from userAut if they actually signing in,
    //if there is, then we will get back userRef from createUserProfileDocument,
    //from the userAuth object being passed in (async userAuth) to
    //await createUserProfileDocument(userAuth).
    //IF there was a doc there, we will get back the userRef.
    //If not, we will create a new object and doc. and then get back the userRef.
    //subscribe (listen) to this userRef for any changes in their data,
    //but we'll also get back the first state of that data (snapshot).
    //using that we'll setState of our local app.js with the snapShot.id
    //and snapshot.data() and then if the users logs out, we'll set
    //current user to null.. the null we'll get back from the Auth library.
    if (userAuth) {
      const userRef =  await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot => {  //where we going to get the data stored for this user.
       this.setState({
         currentUser: 
         {
           id: snapShot.id,
           ...snapShot.data()
         }
        }//, () => {
      //   // console.log(this.state)}  //for testing if we gets back the user db.
      );
      console.log(this.state); //to check if the user Sign up was successfull.
      });    
    }
    else{
      this.setState({currentUser: userAuth});
    }
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
