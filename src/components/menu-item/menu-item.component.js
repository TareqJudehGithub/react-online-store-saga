import React from "react";
import "./menu-item.styles.scss";
import { withRouter} from "react-router-dom";

const menuItem = ({ history, size, title, imageUrl, linkUrl, match}) => (

     <div
     style={{backgroundImage: `url(${imageUrl})`}}
     className={`${size} menu-item`}
     //psuodo code: we tak the match.url into the linkUrl
     onClick={()=> history.push(`${match.url}${linkUrl}`)}>
          <div
          className="background-image"
          style={{backgroundImage: `url(${imageUrl})`}}
          ></div>
          <div className="content">                 
               <h1 className="title"
               
               >{title.toUpperCase()}</h1>
               <span className="subTitle"
               style={{
                   
                    fontSize: "1.2em",
                    color: "rgb(0, 0, 0)",
                    textShadow: "1px 1px 20px #4b4b4a"}}>
                    SHOP NOW</span>                      
          </div>
     </div>
)
export default withRouter(menuItem);
