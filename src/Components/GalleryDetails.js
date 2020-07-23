import React, { Component } from 'react';
import Planetariumdetail from './Planetariumdetail';
import DomeTheater from './DomeTheater';
import ProjectMaping from './ProjectMaping';


class GalleryDetails extends Component {
    makeHref(params) {
        return '#' + params;
    }
    render() {
        var { gallery } = this.props;
        var element = gallery.map((gallery, index) => {
            return gallery.type === 'Planetarium' ? (


                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ width: '20rem', height: '20rem' }}>
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={this.makeHref(gallery.href)}>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-eye fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src={gallery.img} alt=" " />
                        </a>
                        <div className="portfolio-caption">
                            <h6>{gallery.name}</h6>

                        </div>
                    </div>
                </div>
            ) : <div key={index}></div>
        })
        var dom = gallery.map((dom, index) => {
            return dom.type === 'DomeTheater' ? (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ width: '20rem', height: '20rem' }}>
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={this.makeHref(dom.href)}>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-eye fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src={dom.img} alt=" " />
                        </a>
                        <div className="portfolio-caption">
                        <h6>{dom.name}</h6>
                        </div>
                    </div>
                </div>
            ) : <div key={index}></div>
        });
        var project = gallery.map((dom, index) => {
            return dom.type === 'projectMapping' ? (
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" key={index} style={{ width: '20rem', height: '20rem' }}>
                    <div className="portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href={this.makeHref(dom.href)}>
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content"><i className="fas fa-eye fa-3x" /></div>
                            </div>
                            <img className="img-fluid" src={dom.img} alt=" " />
                        </a>
                        <div className="portfolio-caption">
                        <h6>{dom.name}</h6>

                        </div>
                    </div>
                </div>
            ) : <div key={index}></div>
        })
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h3 className="section-heading text-uppercase"><a href="/gallery">Gallery</a></h3>
                            <h4 className="section-heading text-uppercase">ギャラリー</h4>
                            <h6 className="section-subheading text-muted">これまでに弊社でシステム構築や映像調整を手掛けた事例をご紹介します</h6>

                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bc-red">
                            <h2>Planetarium </h2>
                            <h4>プラネタリウム</h4>

                        </div>
                        <div className="row">
                            {element}
                            <Planetariumdetail gallery={this.props.gallery} />


                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bc-red">
                            <h2>Dome Theater</h2>
                            <h4>ドームシアター</h4>
                        </div>

                        <div className="row">
                            {dom}
                            <DomeTheater gallery={this.props.gallery} />

                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 bc-red">
                            <h2>Projection Mapping</h2>
                            <h4>プロジェクションマッピング</h4>

                        </div>

                        <div className="row">
                            {project}
                            <ProjectMaping gallery={this.props.gallery} />
                        </div>
                    </div>
              </section>
            </div>
        );
    }
}

export default GalleryDetails;
