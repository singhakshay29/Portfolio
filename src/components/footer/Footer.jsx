import React from 'react'
import './Footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

export default function footer() {
  return (
    <footer>
     
      <ul className='permalinks'>
        <li><a href='# '>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contacts'>Contacts</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='#linked'><AiFillLinkedin/></a>
        <a href='#insta'><BsInstagram/></a>
        <a href='#git'><AiFillGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; All rights reserved</small>
      </div>






    </footer>
  )
}
