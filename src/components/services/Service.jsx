import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Resposive Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>The goal is to ensure that the content and layout of a website automatically adjust to accommodate different screen resolutions,
                Key principles and techniques involved in responsive design include: Flexible Images,Media Queries,Mobile-First Approach
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
              I'm skilled in using the Bootstrap framework to create responsive and visually appealing websites.Once the design is finalized, the web designer works closely with web developers to bring the design to life using coding languages like HTML, CSS, and JavaScript.
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Devlopment</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
              I can design and develop web applications while ensuring that they are optimized for usability and performance.

Key principles and techniques involved in responsive design include: Flexible Images,Media Queries,Mobile-First Approach
              </p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Clean Coder</h3>
          </div>

          <ul className='service__list'>
            <li>
              <p>
              Clean code refers to writing code that is easy to read, understand, and maintain.

I choose meaningful names for variables, functions, and classes that accurately describe their purpose and functionality.
              </p>
             </li>
          </ul>
        </article>
      </div>


    </section>
  )
}
