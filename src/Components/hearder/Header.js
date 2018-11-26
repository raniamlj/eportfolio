import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
                  
                <header id="home">
                  <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                      <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                      <li><a className="smoothscroll" href="#about">About</a></li>
                      <li><a className="smoothscroll" href="#resume">Resume</a></li>
                      <li><a className="smoothscroll" href="#portfolio">Publications </a></li>
                      <li><a className="smoothscroll" href="#testimonials">Recommendation</a></li>
                      <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul> {/* end #nav */}
                  </nav> {/* end #nav-wrap */}
                  <div className="row banner">
                    <div className="banner-text">
                      <h1 className="responsive-headline"> Rania MAALEJ </h1>
                      <h3>I'm a <span>Rania </span>,I am a computer engineer passionate 
                      about web development. I am lucky to have been able to practice 
                      front-end web development since 2013, in parallel with teaching profession. 
                      <a className="smoothscroll" href="#about">about me</a>.</h3>
            
                      <hr />
                      <ul className="social">
                        <li><a href="https://www.facebook.com/maalej.R"><i className="fa fa-facebook" /></a></li>
                        <li><a href="https://twitter.com/rania_maalej"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://plus.google.com/+RaniaMAALEJ"><i className="fa fa-google-plus" /></a></li>
                        <li><a href="https://www.linkedin.com/in/rn-mlj-227574aa/"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://www.instagram.com/rania_maalej/"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                  </p>
                </header>
              );
            }
          
  }