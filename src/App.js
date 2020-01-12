import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss"
import ShopPage  from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInandSingOut from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
        <Switch> 
       <Route  exact path="/" component={HomePage}/>   
       <Route path="/shop" component={ShopPage}/>
       <Route path="/signin" component={SignInandSingOut}/>
       </Switch>
       
    </div>
  );
}
export default App;
