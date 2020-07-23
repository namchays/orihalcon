import React, { Component } from 'react'

export default class ProductionIntrodution extends Component {
    makeHref(href){
      return '#'+href;
    }
    render() {

  
        var {product} = this.props;
        var element = product.map((Product,index)=>{
            return(
          <div className="col-lg-4 col-sm-6" key={index}>
         <div className="portfolio-item">
         <a className="portfolio-link" data-toggle="modal" href={this.makeHref(Product.href)}>
           <div className="portfolio-hover">
           <div className="portfolio-hover-content"><i className="fas fa-eye fa-3x" /></div>
         </div>
         <img className="img-fluid " src={Product.img} alt=" " />
       </a>
       <div className="portfolio-caption">
            <div className="portfolio-caption-heading">{Product.name}</div>
         <div className="portfolio-caption-subheading text-muted">{Product.jpName}</div>
       </div>
     </div>
   </div>
            )
        })

        return (
        
            <div>
                
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Products</h2>
        <h6 className="section-heading text-uppercase">製品紹介</h6>
        <h3 className="section-subheading text-muted">プラネタリウムやプロジェクションマッピング向けの弊社製品をご紹介します。</h3>
      </div>
      <div className="row">
        {element}
      </div>
    </div>
  </section>
            </div>
        )
    }
}
