import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Tech from './Tech'
import Experience from './Experience'
import { FiChevronsDown } from 'react-icons/fi'
import Footer from './Footer'
import Contact from './Contact'
import Popup from 'reactjs-popup'


const Home = () => {
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' }

  return (
    <>
      <main>
      
        <div className="hero-section">
          <Popup 
            trigger={<button className="button">Menu</button>}
            modal
            overlayStyle={overlayStyle}
          >
            {close => (
              <>
                <button className="close" onClick={close}>
            &times;
                </button>
                <div className="content">
                  <p>About</p>
                  <p>Projects</p>
                  <p>Tech</p>
                </div>
              </>
            )}
          </Popup>
    
          <Navbar />
          <div id="hero" className="hero-text">
            <h1>Welcome! <span role="img" aria-label="hand-wave" >👋</span> I&apos;m Hannah Tinacci</h1>
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

        <section id="projects">
          <Projects />
        </section>

        <section className="tech-skills-container">
          <Tech />
        </section>

        <section className="experience-container">
          <Experience />
        </section>

        <section className="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
