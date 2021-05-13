import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Work from './Work'
import Tech from './Tech'
import Experience from './Experience'
import { FiChevronsDown } from 'react-icons/fi'

import Footer from './Footer'



const Home = () => {


  return (
    <>
      <main>
      
        <div className="hero-section">
          <Navbar />
          <div id="hero" className="hero-text">
            <h1>Hey | Hei | <span role="img" aria-label="hand-wave">👋</span>  I&apos;m Hannah Tinacci</h1>
            <h2>A London-based full-stack developer, previously in educational publishing, looking for a role in an impact-oriented company</h2>
          </div>
          <div className="hero-arrow-down">
            <a href="#about" ><FiChevronsDown /></a>
            <div className="mouse-container">

              <div className="mouse">
                {/* <p>Scroll</p> */}
              </div>

            </div>
          </div>
        </div>
      
        <section >
          <div id="about">
            <About />
          </div>
        </section>

        <section >
          <Work />
        </section>

        <section className="tech-skills-container">
          <Tech />
        </section>

        <section className="experience-container">
          <Experience />
        </section>

      </main>
      <Footer />
    </>
  )
}

export default Home
