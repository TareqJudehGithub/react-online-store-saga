import React from "react";

import { Route } from "react-router-dom"
import CollectionsOverView from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {connect} from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

//170. 
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {SelectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";

//this will return a new component wrapped in the new component we passed in:
const CollectionOverViewWithSpinner = WithSpinner(CollectionsOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {

    componentDidMount(){
     
     const { fetchCollections } = this.props;
     fetchCollections();
      };
  
     render(){
         const { match, isFetchingCollections } = this.props;
       
     return (       
          <div className="shop-page">                             
               <Route exact path={`${match.path}`}
               render={(props) => <CollectionOverViewWithSpinner isLoading={isFetchingCollections} {...props}/>} />
               <Route path={`${match.path}/:collectionId`}
               render={(props) => <CollectionPageWithSpinner isLoading={isFetchingCollections} {...props}/>} />
          </div>    
          )  
     }
}
const MapStateToProps = createStructuredSelector ({
     isFetchingCollections: selectIsCollectionFetching,
     isCollectionsLoaded: SelectIsCollectionsLoaded
});
const mapDispatchToProps = (dispatch) => ({
     fetchCollections: () => dispatch(fetchCollectionsStartAsync())
 });


export default connect(MapStateToProps, mapDispatchToProps)(ShopPage);
