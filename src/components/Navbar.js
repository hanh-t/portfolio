import React from 'react'
// import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
 
  
  return (
    <div id="home">
      <nav id="nav">
        <div className="ui top fixed menu nav-bgd">
          <div className="right menu">
            <AnchorLink href="#home">
              <p className="nav-text">Home</p>
            </AnchorLink>
            <AnchorLink href="#about">
              <p className="nav-text">About</p>
            </AnchorLink>
            <AnchorLink href="#tech">
              <p className="nav-text">Tech</p>
            </AnchorLink>
            <AnchorLink href="#projects">
              <p className="nav-text">Projects</p>
            </AnchorLink>
            <AnchorLink href="#contact">
              <p className="nav-text">Contact</p>
            </AnchorLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar