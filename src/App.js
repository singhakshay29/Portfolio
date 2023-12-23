import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/navbar/Nav";
import About from "./components/About/About";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
