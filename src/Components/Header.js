import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
              <section id = "home" className ="backgroundBlack">
                  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"><img style ={{width:220, height:60}} src="img/Logo.png" alt="/" href="/"/></a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars ml-1" />
      </button>
      <div className="collapse navbar-collapse " id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark" href="#about">News</a></li>
          
          <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark" href="#portfolio">Products</a></li>
          <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark " href="#services">TECHNOLOGIES</a></li>
          <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark" href="#team">Gallery</a></li>
          <li className="nav-item"><a className="nav-link js-scroll-trigger colorDark" href="#contact">About</a></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container">
      <div className="masthead-subheading">Welcome To My Project!</div>
      <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
      <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
      <h5  className ="ps">Created by: Lê Trường Nam</h5>
    </div>
  </header>
  </section>
            </div>
        )
    }
}
