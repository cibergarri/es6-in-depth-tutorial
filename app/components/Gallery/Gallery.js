import React, { Component } from 'react'

class Gallery extends Component {
 render() {
     let alternate = 'https://d30y9cdsu7xlg0.cloudfront.net/png/5020-200.png';
     return (
         <div>
             {
                 this.props.items.map((item,index)=> {
                     let {title,imageLinks, infoLink} =item.volumeInfo;
                     return(                         
                         <a 
                            key={index} 
                            className="book"
                            href={infoLink}
                            target="_blank"
                        >
                             <img 
                                src={imageLinks!==undefined ? imageLinks.thumbnail : alternate} 
                                alt="book image"
                                className="book-img"
                              />
                              <div className="book-text">
                                  {title}
                              </div>
                        </a>
                     )
                 })
             }
         </div>
     )
 }
}
export default Gallery;