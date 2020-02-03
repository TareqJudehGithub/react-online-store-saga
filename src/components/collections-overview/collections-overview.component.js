import React from "react";
import CollectionsPreview from "../collection-preview/collection-preview.component";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollections} from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverView = ({ collections }) => (

     <div className="collections-overview">
        {
             collections.map(({ id, ...otherProps })=>(
                  <CollectionsPreview 
                  key={id}
                  {...otherProps}/>
             ))
        }
     </div>   
)
const mapStateToProps = createStructuredSelector({
     collections: selectCollections
});
export default connect(mapStateToProps)(CollectionsOverView);  
