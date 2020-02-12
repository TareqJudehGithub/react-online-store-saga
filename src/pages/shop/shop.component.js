import React from "react";

import { Route } from "react-router-dom"
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateCollection} from "../../redux/shop/shop.actions";
//converting ShopPage to class component in order to fetch the data
//from firebase:

class ShopPage extends React.Component  {
     
    unsubscribeFromSnapShot = null;

    componentDidMount(){
     const { updateCollections } = this.props;
     
     //calling the collection from firestore:
     const collectionRef = firestore.collection("collections");

     //to get the data from collections:
     collectionRef.onSnapshot(async (snapshot) => {
          const collectionMap = convertCollectionsSnapshotToMap(snapshot);
          updateCollections(collectionMap)
     });
     };

     render(){
         const { match } = this.props;
     return (
          <div className="shop-page">
               {/* <CollectionsOverView /> */}
               <Route exact path={`${match.path}`} component={CollectionsOverView}/>
               <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
          </div> 
          )  
     }
}
const mapDispatchToProps = (dispatch) => ({
     updateCollections: collectionsMap =>
     dispatch(updateCollection(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
