import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Tech from './Tech'
import Experience from './Experience'
// import { FiChevronsDown } from 'react-icons/fi'
import Footer from './Footer'
import Contact from './Contact'
// import Popup from 'reactjs-popup'



const Home = () => {
  // const overlayStyle = { background: 'rgba(0,0,0,0.5)' }

  return (
    <>
      <main>
        
        <div className="hero-section">
          <Navbar />
          {/* <Popup 
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
          </Popup> */}
    
         
          <div>
            <div id="hero" className="hero-text">
              <h1 className="title">HANNAH TINACCI</h1>
              <h2>A London-based <span className="bio-highlight">full-stack developer</span>, previously in educational publishing, looking for a role in an <span className="bio-highlight">impact-oriented company</span></h2>
            </div>
            <div className="hero-arrow-down">
              {/* <a href="#about" ><FiChevronsDown /></a> */}
              <div className="mouse-container">

                <div className="mouse">
                  {/* <p>Scroll</p> */}
                </div>

              </div>
            </div>
          </div>
        </div>
       
        <div className="ui container">
          <section >
           
            <About />
         
          </section>
  
          <section id="tech">
            <Tech />
          </section>
    
          <section id="projects">
            <Projects />
          </section>

       

          <section id="experience">
            <Experience />
          </section>
       
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
