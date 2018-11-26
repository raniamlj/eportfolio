import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
        <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>National School of Engineers of Sfax</h3>
                <p className="info">Phd Student <span>•</span> <em className="date"> 2013- 2017</em></p>
                <p >
                I am a Phd Student in Computer Systems Engineering from 2013 to 2017, at National School 
                of Engineers, University of Sfax, Tunisia (<a href="http://www.enis.rnu.tn"> http://www.enis.rnu.tn/ </a> ).
                My research interests include learning algorithms, artificial neural networks and
                their engineering applications, deep learning, pattern recognition and image analysis.
                
                </p>
              </div>
            </div> {/* item end */}

            <div className="row item">
              <div className="twelve columns">
                <h3>National School of Engineers of Sfax</h3>
                <p className="info">Master 2 Degree <span>•</span> <em className="date">2008</em></p>
                <p>
                    I have a Master 2 Diploma in Automatic and Industrial Informatics 
                    (Option: Computer Systems and Mechatronics) with excellent grade from the National School 
                of Engineers, University of Sfax, Tunisia (<a href="http://www.enis.rnu.tn"> http://www.enis.rnu.tn/ </a> ).  
                </p>
              </div>
            </div> {/* item end */}

           

            <div className="row item">
              <div className="twelve columns">
                <h3>National School of Engineers of Sfax</h3>
                <p className="info"> Diploma in Computer Engineering <span>•</span> <em className="date">
                2006 </em></p>
                <p>
                I have a Computer Engineering Diplomat in New Communications Technologies with Good grade from the National School 
                of Engineers, University of Sfax, Tunisia (<a href="http://www.enis.rnu.tn"> http://www.enis.rnu.tn/ </a> ). 
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Sfax </h3>
                <p className="info">Senior Professor Emeritus <span>•</span> <em className="date">2017 - Present</em></p>
                <p> I am a computer science teacher at the faculty of medecine of Sfax ( <a href="http://www.medecinesfax.org/">
                 http://www.medecinesfax.org/</a>), University of Sfax, the ministry of higher education and scientific research in Tunisia.
                 My teaching interests include Web devolepment, deep learning and E-pedagogie.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Lomachines</h3>
                <p className="info"> Web developer engineer  <span>•</span> <em className="date">2013 - 2017</em></p>
                <p> I was a Part-time developer engineer in the IT department of Lomachines(
                  <a href="http://lomachines.com/">http://lomachines.com/</a>). The main function of this company 
                  is online sales of Farming Equipment And Tools Gardening Machines. The IT department also has 
                  the function of satisfying Tunisian customers in terms of web development.
                </p>
              </div>
            </div> {/* item end */}



            <div className="row item">
              <div className="twelve columns">
                <h3>IREX</h3>
                <p className="info"> ICT  trainer / IT Consultant <span>•</span> <em className="date"> 2015 </em></p>
                <p>
                  I was a regional training coordinator in TAT Tunisia program sponsored by IREX/USA in collaboration 
                  with CNIPRE (Centre National d’Innovation Pédagogique et de Recherches en
                  Education), Ministry of education.
                </p>
              </div>
            </div> {/* item end */}


            <div className="row item">
              <div className="twelve columns">
                <h3>Ministry of Education</h3>
                <p className="info">Computer science teacher <span>•</span> <em className="date">2006 - 2013</em></p>
                <p>
                I am a computer science teacher at Ministry of Education in Tunisia.
                My teaching interests include algorithmic and multimedia.

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
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand css" /><em>Tensorflow</em></li>
                <li><span className="bar-expand photoshop" /><em>React</em></li>
                <li><span className="bar-expand html5" /><em>Photoshop</em></li>
                <li><span className="bar-expand photoshop" /><em>Javascript</em></li>
                <li><span className="bar-expand illustrator" /><em>React-Native</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
        
      
       
    );
  }
}