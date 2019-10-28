import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="pp" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p className="about-text">
                Hi, my name is Gema Muhammad Reza and I'm a web developer who's currently
                working at Skyshi Digital Indonesia, located in Yogyakarta as a front-end developer.
                Outside of programming I like to play some online games, such as DOTA2, PUBG, APEX, and
                do anything fun.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Gema Muhammad Reza</span><br />
                    <span>Kricak<br />
                      Tegalrejo, Yogyakarta
                    </span><br />
                    <span>(+62)81-285-097-669</span><br />
                    <span>gemamreza@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a target="_blank" href="https://drive.google.com/file/d/1V4RdTEV09FfON9jBsCH4V_X7pJ3mf72b/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}
export default About;