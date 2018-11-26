import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a href="https://www.facebook.com/maalej.R"><i className="fa fa-facebook" /></a></li>
              <li><a href="https://twitter.com/rania_maalej"><i className="fa fa-twitter" /></a></li>
              <li><a href="https://plus.google.com/+RaniaMAALEJ"><i className="fa fa-google-plus" /></a></li>
              <li><a href="https://www.linkedin.com/in/rn-mlj-227574aa"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://www.instagram.com/rania_maalej/"><i className="fa fa-instagram" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© Copyright 2018 Rania MAALEJ</li>
              <li> React portfolio <a title="Styleshout" > </a></li>   
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      
       
    );
  }
}