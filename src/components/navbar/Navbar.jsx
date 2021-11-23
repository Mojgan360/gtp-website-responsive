import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo.svg'
import { links } from '../../utils/data'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className='gtp3__navbar'>
      <div className='gtp3__navbar-center'>
        {/* nav-header */}
        <div className='gtp3__navbar-header'>
          <img src={logo} alt='logo' />
          <button
            className='gtp3__navbar-header_toggle_menu'
            onClick={() => toggleLinks()}
          >
            {showLinks ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
        {/* nav-container */}
        <div className='gtp3__navbar-containers'>
          <ul className='links'>
            {links.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>{item.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* nav-sigin */}

        <div className='gtp3__navbar-signin'>
          <p>Sign in</p>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
