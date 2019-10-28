import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Education ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Purwadhika Startup Coding School</h3>
                <p className="info">Web and Mobile App Development <span>•</span> <em className="date">July 2019</em></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Telekomunikasi Tunas Harapan Highschool </h3>
                <p className="info">Software Engineering <span>•</span> <em className="date">May 2015</em></p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Skyshi Digital Indonesia</h3>
                <p className="info">Front-End Developer <span>•</span> <em className="date">September 2019 - Present</em></p>
                <p>
                  My first job as a web developer is started right here, my role is front-end developer, 
                  mostly using React framework.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Aisin Indonesia</h3>
                <p className="info">Machine Operator <span>•</span> <em className="date">July 2017 - September 2019</em></p>
                <p>
                  In Aisin Indonesia, my responsibility was to make a car component, 
                  I made door-locks.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Fukusuke Kogyo Indonesia</h3>
                <p className="info">Machine Operator <span>•</span> <em className="date">May 2015 - July 2017</em></p>
                <p>
                  In Fukusuke Kogyo Indonesia, my responsibility was to make sure that the machine is producing good
                  plastic rolls, and checking the plasctic rolls wether it is good or bad.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand reactjs" /><em>ReactJS</em></li>
                <li><span className="bar-expand nodejs" /><em>NodeJS</em></li>
                <li><span className="bar-expand mysql" /><em>My SQL</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}

export default Resume;