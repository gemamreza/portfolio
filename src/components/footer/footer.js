import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <React.Fragment>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.facebook.com/gema.muhammadreza" target="_blank"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://twitter.com/gemamreza" target="_blank"><i className="fa fa-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/in/gema-muhammad-reza-9aa259176/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/gemamreza/" target="_blank"><i className="fa fa-instagram" /></a></li>
              </ul>
              <ul className="copyright">
                <li>Gema Muhammad Reza @ 2019 </li>
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;