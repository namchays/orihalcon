import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
              <section className="page-section"  id="contact">
              <div className="row " >

  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
  <h3 className="text-center">【VRイベントリポート】オリハルコンテクノロジーズ@TOKYO GAME SHOW 2016</h3>
    <video controls className="ps" >
      <source src="/assets/video/About.mp4" />
    </video>
   
  </div>
</div>


                
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Contact Us</h2>
        <h4 className="section-heading text-uppercase">お問い合わせ</h4>
        <h3 className="section-subheading text-muted">お問い合わせフォームおよび弊社概要</h3>
      </div>
      
      <div className="row">
        
      
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
      <form id="contactForm" name="sentMessage" noValidate="novalidate">
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
              <p className="help-block text-danger" />
            </div>
            <div className="form-group">
              <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
              <p className="help-block text-danger" />
            </div>
            <div className="form-group mb-md-0">
              <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
              <p className="help-block text-danger" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
              <p className="help-block text-danger" />
            </div>
          </div>
        </div>
        <div className="text-center">
          <div id="success" />
          <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
        </div>
      </form>
      </div>
      
      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        
        <table className="table table-bordered  colorRed">
          <thead>
            <tr>
              <th>社名   </th>
              <th>株式会社オリハルコンテクノロジーズ  ORIHALCON Technologies, Inc.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>所在地    </td>
                <td>〒164-0001
                      <br/>
                      東京都中野区中野3-33-18-301
                      <br/>
                TEL：03-6304-8356
                </td>
             
            </tr>
            <tr>
                <td>代表者</td>
                <td>代表取締役社長 高幣俊之</td>
            </tr>
           
            <tr> 
                <td>設立</td>
                <td>平成18年11月6日</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      
      
  
      </div>
    </div>
  </section>
  {/* Footer*/}
  
  <footer className="footer py-4">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
        <div className="col-lg-4 my-3 my-lg-0">
          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="col-lg-4 text-lg-right">
          <a className="mr-3" href="#!">Privacy Policy</a>
          <a href="#!">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>
            </div>
        );
    }
}

export default Footer;
