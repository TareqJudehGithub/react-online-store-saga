import React from "react";

import { Route } from "react-router-dom";
import {connect} from "react-redux";

//179.6
// import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";

import CollectionsOverViewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

class ShopPage extends React.Component  {

    componentDidMount(){
     
     const { fetchCollections } = this.props;
     fetchCollections();
      };
  
     render(){
         const { match } = this.props;
       
     return (       

          <div className="shop-page">                            
               <Route exact path={`${match.path}`}
                    component={CollectionsOverViewContainer} />
               
               <Route path={`${match.path}/:collectionId`}
                component={CollectionContainer}/>               
          </div>    
          )  
     }
}

const mapDispatchToProps = (dispatch) => ({
     fetchCollections: () => dispatch(fetchCollectionsStart())
 });
export default connect(null, mapDispatchToProps)(ShopPage);
