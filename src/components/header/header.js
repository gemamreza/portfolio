import React, { Component } from 'react';

class Header extends Component {
  render() {
    let propsHeader = this.props.propsHeader;
    return (
      <React.Fragment>
        <header id="home">
        <nav id="nav-wrapper">
          <a className="mobile-btn" href="#nav-wrapper" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="i-navbar" className="i-navbar">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li className="current"><a className="smoothscroll" href="#about">About</a></li>
            <li className="current"><a className="smoothscroll" href="#resume">Resume</a></li>
            <li className="current"><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {propsHeader.name}.</h1>
            <h3>I'm a {propsHeader.role}.</h3>
            <hr/>
            <ul className="social">
              <li><a href="https://www.facebook.com/gema.muhammadreza"  target="_blank"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/gemamreza" target="_blank"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/gema-muhammad-reza-9aa259176/" target="_blank"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/gemamreza/" target="_blank"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
      </React.Fragment>
    );
  }
}

export default Header;