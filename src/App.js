import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navbar/Nav';
import About from './components/About/About';
import Experienced from './components/experienced/Experience';
import Service from './components/services/Service';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonial/Testimonials';
import Contact from './components/contact/contact';
import Footer from './assets/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header></Header>


      
      <Nav/>
      <About/>
      <Experienced/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      

    </div>
  );
}

export default App;
