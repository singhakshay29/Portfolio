import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const headerSocial = () => {
  return (
    <div className='header__Socials'>
        <a href='https://www.linkedin.com/in/akshaysingh29/' target='_blank'><BsLinkedin/></a>
        <a href='#git' target='_blank'><BsGithub/></a>
        <a href='#insta' target='_blank'><BsInstagram/></a>
        
    </div>
  )
}

export default headerSocial