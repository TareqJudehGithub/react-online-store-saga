import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class directory extends React.Component {
     constructor(){
          super()
          this.state={
               sections: [
                         {
                              
                         title: 'Women',
                         imageUrl: "https://i.ibb.co/vY58WNk/Women.jpg",
                         size: 'large',
                         id: 1,
                         linkUrl: 'shop/womens'
                          
                         },
                         {
                         title: 'Men',
                         imageUrl: 'https://i.ibb.co/1mvLjJB/Men.jpg',
                         size: 'large',
                         id: 2,
                         linkUrl: 'shop/mens'
                           
                         },
                         {
                         title: 'Sneakers',
                         imageUrl: 'https://i.ibb.co/f1dJ5G4/Sneakers.png',
                         size: 'large',
                         id: 3,
                         linkUrl: 'shop/sneakers'
                         },
                         {
                         title: 'Hats',
                         imageUrl: 'https://i.ibb.co/b69yBdq/Hats.jpg',
                         size: 'large',
                         id: 4,
                         linkUrl: 'shop/hats'
                         },
                         {
                         title: 'Jackets',
                         imageUrl: 'https://i.ibb.co/zGMkGsF/TB2y6y6hs2v-U1-Jj-SZFw-XXX2cp-Xa-3192213483-1.jpg',
                         size: 'large',
                         id: 5,
                         linkUrl: 'shop/jackets'
                         }  
                       ]                 
                    }
               }
     render() {
          return (
               <div className="directory-menu">
               {
                    this.state.sections.map(({ id, title, imageUrl, size}) => {
                         return (
                              <MenuItem 
                              key={id}
                              title={title}
                              imageUrl={imageUrl}
                              size={size}
                              />
                         )
                    })
                    // this.state.sections.map(section => {
                    //     return (
                    //      <MenuItem 
                    //      key={section.id}   
                    //      id={section.id}
                    //      title={section.title}
                    //      imageUrl={section.imageUrl} 
                    //      />
                    //     )                         
                    // })


               }
               </div>
          )
     }
}
export default directory