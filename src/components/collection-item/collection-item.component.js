import React from "react";
import "../collection-item/collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl}) => {
     return (
          <div className="collection-item">
               <div
               className="image"
               style={{
                    backgroundImage:`url(${imageUrl})`                                      
               }}
               >
               </div>
               <div className=".collection-footer"
               style={{}}>
                    <span className="name"
                    // style={{paddingRight: "10px",paddingLeft: "0px"}}
                        
                    >{name}</span>
                    {/* <span className="price"
                    //  style={{paddingLeft: "10px", paddingRight:"0px"}}
                    >{price}</span> */}
               </div>
               <div>
               <span className="price"
                    //  style={{paddingLeft: "10px", paddingRight:"0px"}}
                    >{price}</span>
               </div>
          </div>
     )
     
}
export default CollectionItem;