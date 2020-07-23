import React, { Component } from 'react'

export default class Planetarium extends Component {
    makeHref(params){
        return '#'+params;
    }
    render() {
        var {gallery} = this.props;
        var element = gallery.map((gallery,index)=>{
            return(
            
               
               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={gallery.id}>
                     <div className="portfolio-item">
         <a className="portfolio-link" data-toggle="modal" href={this.makeHref(gallery.href)}>
           <div className="portfolio-hover">
           <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
         </div>
         <img className="img-fluid" src={gallery.img} alt=" " />
       </a>
       <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{gallery.name}</div>
  
       </div>
     </div>
   </div>
          
               
       
  
            )
        })


        return (
            <div>
               {element} 
            </div>
        )
    }
}
