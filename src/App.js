import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./pages/homepage/homepage.styles.scss"
import ShopPage  from "./pages/shop/shop.component";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
        <Switch> 
       <Route  exact path="/" component={HomePage}/> 
    
       <Route path="/shop" component={ShopPage}/>
       </Switch>
       
    </div>
  );
}
export default App;
