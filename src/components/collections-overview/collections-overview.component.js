import React from "react";
import CollectionsPreview from "../collection-preview/collection-preview.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors"

import "./collections-overview.styles.scss";

const CollectionsOverView = ({ collections }) => (

     <div className="collections-overview">
        {
             collections.map((item)=>(
                  <CollectionsPreview 
                  key={item.id}
                  item={item}/>
             ))
        }
     </div>   
);
const mapStateToProps = createStructuredSelector({
     collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverView);  
