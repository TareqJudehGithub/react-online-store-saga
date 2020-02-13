import React from "react";

import { Route } from "react-router-dom"
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {UpdateCollection} from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";


//165 2.

//this will return a new component wrapped the new component we passed in
const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {
    constructor(){
         super()
         this.state = {
          isLoading: true
         }
    } 

    unsubscribeFromSnapShot = null;

    componentDidMount(){
     const { updateCollections } = this.props;
     
     //calling the collection from firestore:
     const collectionRef = firestore.collection("collections");

     //to get the data from collections:

     //The moment snapshot comes back:
     collectionRef.onSnapshot(async (snapshot) => {
     //and it's converted
          const collectionMap = convertCollectionsSnapshotToMap(snapshot);
     //and then we update our reducer:
          updateCollections(collectionMap);
        
          this.setState({ isLoading: false});
     });
     };
     //Now ShopPage is good to render the collection object!

     render(){
         const { match } = this.props;
         const { isLoading } = this.state;
     return (       
          <div className="shop-page">                             
               <Route exact path={`${match.path}`}
               render={(props) => <CollectionOverViewWithSpinner isLoading={isLoading} {...props}/>} />
               <Route path={`${match.path}/:collectionId`}
               render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>} />
          </div>    
          )  
     }
}
const mapDispatchToProps = (dispatch) => ({
     updateCollections: collectionsMap =>
     dispatch(UpdateCollection(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
