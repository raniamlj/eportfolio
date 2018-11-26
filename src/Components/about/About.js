import React, { Component}  from 'react';

export default class About extends Component {
  render() {
    return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>
          I'm a <span>Rania </span>,I am a computer science engineer, passionate 
          about web development. I am lucky to have been able to practice 
          front-end web development since 2013, in parallel with teaching profession. 
          I received my Engineering Diploma in computer sciences engineering in 2006 
          and the MS degree in Automatic and Industrial Computing in 2008,
           both from the National School of Engineers of Sfax, University of Sfax, Tunisia. 
           Currently, I am preparing my Ph.D at also National School of Engineers of Sfax and 
           I am a computer science teacher at the faculty of medicine, University of Sfax in 
           Tunisia. My current research interests include learning algorithms,
            artificial neural networks and their engineering applications, pattern recognition,
            deep learning and image analysis.

            </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Rania MAALEJ</span><br />
              Email: rania.maalej@medecinesfax.org <br />
              <span>Tel: (216) 21106176 / (216) 97362141</span><br />
              <span> <a href="https://orcid.org/0000-0003-1657-3324">
               Orcid : 0000-0003-1657-3324 </a> </span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);
  }
}