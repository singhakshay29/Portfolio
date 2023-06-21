import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/project1.png'
export default function Portfolio() {
  return (
   <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={project1} alt='pic'/>
        </div>
        <h3>Modern Home Page Layout</h3>
        <div className="portfolio__item-cta">
       <a href='https://github.com/singhakshay29/home-page-layout' className='btn' target='_blank'>Github</a>
        <a href='https://singhakshay29.github.io/home-page-layout/' className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src="img" alt='pic'/>
        </div>
        <h3>Portfolio Title Name</h3>
        <div className="portfolio__item-cta">
       <a href='#abc' className='btn' target='_blank'>Github</a>
        <a href='#https' className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src="img" alt='pic'/>
        </div>
        <h3>Portfolio Title Name</h3>
        <div className="portfolio__item-cta">
       <a href='#abc' className='btn' target='_blank'>Github</a>
        <a href='#https' className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
       </article>
    </div>
   </section>
  )
}
