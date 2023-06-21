import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'


 const Nav =() =>{
  const [activeNav,setActiveNav]= useState('#')
  return (
    <nav>
      <a href='# ' onClick={() => setActiveNav('# ')} className={activeNav === '# ' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#service' onClick={()=> setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio'onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} ><RiServiceLine/></a>
      <a href='#contacts'onClick={()=> setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav