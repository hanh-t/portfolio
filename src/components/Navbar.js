import React from 'react'
// import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
 
  
  return (
    <div id="home">
      <nav id="nav">
      
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
      </nav>
    </div>
  )
}

export default Navbar