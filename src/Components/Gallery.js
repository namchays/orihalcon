import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <div>
                 <section className="page-section bg-light" id="team">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase"><a href="/gallery">Gallery</a></h2>
        <h4 className="section-heading text-uppercase">ギャラリー</h4>
        <h3 className="section-subheading text-muted">これまでに弊社でシステム構築や映像調整を手掛けた事例をご紹介します</h3>
      </div>
      <img src="/assets/img/gallery/gallery.JPG" alt =" "></img> 
        </div>
 
  </section>
            </div>
        )
    }
}
