import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export default function contact() {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__conatiner">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akshay2898.as@gmail.com</h5>
            <a href='.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href='.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>Email</h4>
            <h5>7607607977</h5>
            <a href='.com'>Send a message</a>
          </article>
        </div>
        <form action=''>
        <input type='text' name='name' placeholder='Full Name'required/>
        <input type='email' name='email' placeholder='Email' required/>
        <textarea name='Message' rows="7"placeholder='Your Message' required/>
        <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>

    </section>
  )
}
