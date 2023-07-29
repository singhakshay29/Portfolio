import React from 'react'
import './Portfolio.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/Project2.png'
import project3 from '../../assets/project3.png'

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
        <h3>Home Page Layout</h3>
        <div className="portfolio__item-cta">
       <a href='https://github.com/singhakshay29/home-page-layout' className='btn'>Github</a>
        <a href='https://singhakshay29.github.io/home-page-layout/' className='btn btn-primary'>Live Demo</a>
       </div>
       </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={project2} alt='pic'/>
        </div>
        <h3>Movie Deck</h3>
        <div className="portfolio__item-cta">
       <a href='https://github.com/singhakshay29/HTML-and-CSS-for-Movie-Deck---JS-currying-Debouncing-JS-Project-Building-Sessi---gbv4p6pdeupf' className='btn'>Github</a>
        <a href='https://singhakshay29.github.io/HTML-and-CSS-for-Movie-Deck---JS-currying-Debouncing-JS-Project-Building-Sessi---gbv4p6pdeupf/' className='btn btn-primary'>Live Demo</a>
       </div>
       </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={project3} alt='pic'/>
        </div>
        <h3>YourDictionary</h3>
        <div className="portfolio__item-cta">
       <a href='https://github.com/singhakshay29/YourDictionary' className='btn'>Github</a>
        <a href='https://singhakshay29.github.io/YourDictionary/' className='btn btn-primary'>Live Demo</a>
       </div>
       </article>
    </div>
   </section>
  )
}
