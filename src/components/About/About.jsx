import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import Subject from '../../assets/Subject.png'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me-image'>
            <img src={Subject} alt=''/>
          </div>
        </div>
        <div className='about__content'>
         
          <div className='about__cards'>
          <p>
          Courteous and enthusiastic front-end developers As a full-stack developer, I am capable of developing both the front-end and back-end of web applications. I have a solid understanding of both front-end technologies such as HTML, CSS, and JavaScript as well as back-end technologies such as databases, servers, and APIs.
          </p>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Skills</h5>
            </article>
            <div className="skills-set">
            <article className='skills'>
              <h5> <FaAward className='about__icon'/>HTML</h5>
            </article>
            <article className='skills'>
              <h5> <FaAward className='about__icon'/>CSS</h5>
            </article>
            <article className='skills'>
              <h5> <FaAward className='about__icon'/>JAVASCRIPT</h5>
            </article>
            <article className='skills'>
              <h5> <FaAward className='about__icon'/>BOOTSTRAP</h5>
            </article>
            <article className='skills'>
              <h5> <FaAward className='about__icon'/>REACT.JS</h5>
            </article>
            </div>
           
          </div>




        </div>
      </div>
      </section>
  )
}