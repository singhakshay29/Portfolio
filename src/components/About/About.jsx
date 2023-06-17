import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import Subject from '../../assets/Subject 2.png'

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
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <small>2 years</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <small>2 years</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <small>2 years</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestias placeat saepe maiores quaerat! Eligendi, magni voluptatum quidem accusantium adipisci natus eum quibusdam praesentium, tempora libero possimus necessitatibus, aliquid consequuntur?

          </p>
          <a href='#contact' className='btn'>Contact Me</a>




        </div>
      </div>
      </section>
  )
}