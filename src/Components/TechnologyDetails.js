import React, { Component } from 'react';

class TechnologyDetails extends Component {
    render() {
        var { Technology } = this.props;
        var element = Technology.map((Tech, index) => {
            return index % 2===0 ? (
            <div className="row" key={index}>
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="text-center">
                    <h4>{Tech.name}</h4>
                    <h4>{Tech.jpName}</h4>
                </div>
                </div>
                
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    
                </div>
                
               
                <div className="row" >
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <p>
                            {Tech.content}
                        </p>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img alt=" " style={{width:560}} src={Tech.img}></img>
                    </div>
                </div>
            </div>
            ) :
            
            (
                <div className="row" key={index}>
                
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    
                </div>
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      
                <div className="text-center">
                    <h4>{Tech.name}</h4>
                    <h4>{Tech.jpName}</h4>
                </div>
                </div>
                
              
                <div className="row" key={index}>
                  

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <img alt=" " style={{width:560}} src={Tech.img}></img>
                    </div>

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <p>
                            {Tech.content}
                        </p>
                    </div>
                </div>
            </div>
            );
        })
        return (
            <div>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase"><a href="/technology">Technology</a></h2>
                        <h4 className="section-heading text-uppercase">保有技術</h4>
                        <h5 className="section-subheading text-muted">弊社が独自開発しているソフトウェアの基盤技術についてご紹介します。</h5>

                    </div>
                    {element}

                </div>
            </div>
        );
    }
}

export default TechnologyDetails;