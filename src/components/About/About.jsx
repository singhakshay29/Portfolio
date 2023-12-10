import React from "react";
import "./About.css";
import Js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import HTML from "../../assets/HTML.png";
import CSS from "../../assets/CSS.png";
import Redux from "../../assets/Redux.png";
import tail from "../../assets/tail.png";
import node from "../../assets/nodejs.png";
import mu from "../../assets/mu.png";
import chakra from "../../assets/chakra.png";
import boot from "../../assets/boot.png";
import mongo from "../../assets/mongo.png";
import sql from "../../assets/MySql.png";

export default function About() {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__cards">
          <p>
            Enthusiastic and skilled Full Stack Developer with a comprehensive
            understanding of various front-end and back-end technologies.
            Proficient in Java, CSS, HTML, JavaScript, React,Redux, Node.js,
            Express.js, MySQL and MongoDB. Passionate about creating interactive
            and user-friendly web applications. Seeking a challenging role as a
            Full Stack Developer in an organization that fosters continuous
            learning and professional growth
          </p>
        </div>
      </div>
      <h2>Skills</h2>
      <div>
        <div className="skills-set">
          <article className="skills">
            <h5>
              <img src={HTML} className="logoSkills" alt="" />
              HTML
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={CSS} className="logoSkills" alt="" />
              CSS
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={Js} className="logoSkills" alt="" />
              JAVASCRIPT
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={react} className="logoSkills sms" alt="" />
              <p className="bot">REACT</p>
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={Redux} className="logoSkills sms2" alt="" />
              <p className="bot">REDUX</p>
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={tail} className="logoSkills sms3" alt="" />
              <p className="bot2">Tailwind Css</p>
            </h5>
          </article>
        </div>
        <div className="skills-set">
          <article className="skills">
            <h5>
              <img src={boot} className="logoSkills" alt="" />
              BootStrap
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={mu} className="logoSkills sms3" alt="" />
              Material Ui
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={chakra} className="logoSkills sms3" alt="" />
              <p className="sms2">Chakra Ui</p>
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={node} className="logoSkills sms3" alt="" />
              <p className="sms3">Nodejs</p>
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={sql} className="logoSkills sms" alt="" />
              <p className="sms">MySQL</p>
            </h5>
          </article>
          <article className="skills">
            <h5>
              <img src={mongo} className="logoSkills bot2" alt="" />
              MongoDB
            </h5>
          </article>
        </div>
      </div>
    </section>
  );
}
