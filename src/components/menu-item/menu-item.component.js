import React from "react";
import "./menu-item.styles.scss";

const menuItem = ({ title, imageUrl, size}) => (

     <div
     style={{backgroundImage: `url(${imageUrl})`}}
     className={`${size} menu-item`}>
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
                    textShadow: "1px 1px 10px rgb(250, 250, 250)",
                    fontWeight: "400"}}> SHOP NOW</span>                      
          </div>
     </div>
)
export default menuItem;