import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, showMenu] = useState(false)

  let nav

  if (menu) {
    nav = <div className="master-menu">
      <div id="yellow-nav" className="navbar">
        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <button className="button is-black" onClick={() => showMenu(!menu)}>contact.</button>
            </div>
          </div>
        </div>
      </div>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <main className="column">
            <div className="column is-flex is-flex-direction-column is-align-items-center">
              <h1 className="title is-1 ">contact.</h1>
              <div className="columns is-mobile">
                <div className="column is-flex is-flex-direction-column is-align-items-center">
                  <a  href="#about-me"><h1 id="menu"  >About me</h1></a>
                  <a  href="#projects"><h1 id="menu"  >Projects</h1></a>
                  <a  href="#experience"><h1 id="menu"  >Experience</h1></a>
                  <a  href="#contact"><h1 id="menu"  >Contact</h1></a>
                </div>
              </div>
              <button  onClick={() => showMenu(!menu)} type="submit">Close</button>
            </div>
          </main>
        </div>
      </section>
    </div>
  }
  return (
    <nav id="nav">
      <div className="navbar is-black is-fixed-top">
        {nav}
        <button onClick={() => showMenu(!menu)}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
        <div className="navbar-item">
          <AnchorLink href='#about-me'><button className="button is-yellow">About</button></AnchorLink>
          <AnchorLink href='#projects'><button className="button is-yellow">Projects</button></AnchorLink>
          <AnchorLink href='#experience'><button className="button is-yellow">Experience</button></AnchorLink>
          <AnchorLink href='#contact'><button className="button is-yellow">Contact</button></AnchorLink>
          <button  onClick={() => showMenu(!menu)}>contact.</button>

        </div>
      </div>
      {/* <Link to="/">
        Home
      </Link>
      <Link to="#about-me">
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
      </Link> */}
    </nav>
  )
}

export default Navbar