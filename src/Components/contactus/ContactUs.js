import React, { Component}  from 'react';

export default class ContactUs extends Component {
  render() {
    return (<section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">If you have freelance missions, projects, questions or if you need 
          any information, do not hesitate to contact me directly or by using the form.
          I would be happy to answer you as soon as possible.
            </p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">

          <form action method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue size={35} id="contactName" name="contactName" />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>

          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              Rania MAALEJ<br />
              Email: rania.maalej@medecinesfax.org <br />
              Address: 04 Mahdia Road Markez kaaniche  <br />
              Sakiet eddaier, SFAX 3011, TUNISIA<br />
              <span>Tel: (216) 21106176 / (216) 97362141</span>
            </p>
          </div>
          <div className="widget widget_tweets">
            <h4 className="widget-title">  </h4>
            <ul id="twitter">
              <li>
                <span>
                   
                </span>
                <b><a href="#"> </a></b>
              </li>
              <li>
                <span>
                   
                </span>
                <b><a href="#"> </a></b>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>);
  }
}