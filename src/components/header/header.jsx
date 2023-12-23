import React from "react";
import "./header.css";
import "./CTA";
import CTA from "./CTA";
import HeaderSocial from "./headerSocial";
import Me from "../../assets/Me.png";

export default function header() {
  return (
    <header id="# ">
      <div className="container header__container">
        <h3>Hello I'am</h3>
        <h1>Akshay Singh</h1>
        <h2 className="text-light"> Full Stack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
