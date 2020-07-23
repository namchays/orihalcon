import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
      var element = this.props.product.map((Product, index) =>{
        return(
          <div className="portfolio-modal modal fade" id={Product.href} tabIndex={-1} role="dialog" aria-hidden="true" key={index}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt =" " /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project Details Go Here*/}
        <h2 className="text-uppercase">{Product.name}</h2>
        <p className="item-intro text-muted">{Product.jpName}</p>
                      <img className="img-fluid d-block mx-auto" src={Product.img} alt="" />
        <p>{ Product.content}</p>
        <h4>利用イメージ</h4>
                      <ul className="list-inline">
                        <li>{Product.img1}</li>
                        <li>{Product.img2}</li>
                        <li>{Product.img3}</li>
                        <li>{Product.img4}</li>
                       
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                        Close Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
