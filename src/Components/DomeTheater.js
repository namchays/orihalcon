import React, { Component } from 'react';

class DomeTheater extends Component {
   
    render() {
        var {gallery}= this.props;
 
 
         var element = gallery.map((Gallery, index) =>{
             return Gallery.type === 'DomeTheater' ? (
               <div className="portfolio-modal modal fade" id={Gallery.href} tabIndex={-1} role="dialog" aria-hidden="true" key={Gallery.id}>
               <div className="modal-dialog">
                 <div className="modal-content">
                   <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt =" " /></div>
                   <div className="container">
                     <div className="row justify-content-center">
                       <div className="col-lg-8">
                         <div className="modal-body">
                           {/* Project Details Go Here*/}
             <h4 className="text-uppercase">{Gallery.name}</h4>
         
                           <img className="img-fluid " style= {{width:700}} src={Gallery.img} alt="" />
             <p>{ Gallery.content}</p>
        
                          
                           <button className="btn btn-primary" data-dismiss="modal" type="button">
                             <i className="fas fa-times mr-1" />
                             Close Gallery
                           </button>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             ) :<div key ={Gallery.id}></div>
           })
 
 
 
         return (
             <div>
                 {element}
             </div>
         )
     }
}

export default DomeTheater;
