import React, { Component } from 'react';
import About from "./Components/about/About";
import Header from './Components/hearder/Header';
import Resume from './Components/resume/Resume';
import Portfolio from './Components/portfolio/Portfolio';
import Testimonials from  './Components/testimonials/Testimonials';
import ContactUs from './Components/contactus/ContactUs';
import Footer from './Components/footer/Footer';
import resumeData from './resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
