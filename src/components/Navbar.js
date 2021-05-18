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
        Home
            </AnchorLink>
            <AnchorLink href="#about">
        About
            </AnchorLink>
            <AnchorLink href="#tech">
        Tech 
            </AnchorLink>
            <AnchorLink href="#projects">
        Projects
            </AnchorLink>
            <AnchorLink href="#contact">
        Contact
            </AnchorLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar