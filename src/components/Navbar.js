import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="nav">
      <Link to="/">
        Home
      </Link>
      <Link to="/about-me">
        About
      </Link>
      <Link to="/tech">
        Tech 
      </Link>
      <Link to="/work">
        Work
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </nav>
  )
}

export default Navbar