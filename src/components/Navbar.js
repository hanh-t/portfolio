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
              <p>Home</p>
            </AnchorLink>
            <AnchorLink href="#about">
              <p>About</p>
            </AnchorLink>
            <AnchorLink href="#tech">
              <p>Tech</p>
            </AnchorLink>
            <AnchorLink href="#projects">
              <p>Projects</p>
            </AnchorLink>
            <AnchorLink href="#contact">
              <p>Contact</p>
            </AnchorLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar