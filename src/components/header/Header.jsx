import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
          <h5> Hola</h5>
          <h1> Nico Villegas</h1>
          <h5 className='text-light'> Fullstack React</h5>
          <CTA/>
          <HeaderSocials/>
          
          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    </header>

    )
}

export default Header