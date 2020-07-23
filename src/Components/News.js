import React, { Component } from 'react'

export default class News extends Component {
    render() {
       var {News} = this.props;
       var element = News.map((New, index)=>{
           return(
           <li className = {index%2 === 0 ? "timeline-inverted" : ""} key={index}>
            <div className="timeline-image"><img className="rounded-circle img-fluid" src={New.img} alt =" " /></div>
            <div className="timeline-panel">
              <div className="timeline-heading">
           <h4>{New.time}</h4>
           <h4 className="subheading">{New.name}</h4>
              </div>
           <div className="timeline-body"><p className="text-muted fontSize-12">{New.content}</p></div>
            </div>
          </li>);
       })
        return (
            <div>
                 <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">News</h2>
        <h4 className="section-heading text-uppercase">ニュース</h4>
        <h3 className="section-subheading text-muted">最新の導入事例や取り組みをご紹介します。</h3>
      </div>
      <ul className="timeline">
        
            {element}
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
            </div>
        )
    }
}
