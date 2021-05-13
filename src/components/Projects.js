import React from 'react'


const Projects = () => {
  // const Carousal = require('3d-react-carousal')

  // const projectSlides1 = [
  //   <img key={1} src="./assets/project4-homepage.png" alt="project4-homepage"/>
  // ]

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project1-container">
        {/* <Carousal slides={projectSlides1} autoplay={false} interval={1000} /> */}
        <h2>HABITUP</h2>
        <p>My final, solo project at General Assembly and a full-stack app built using Python, Django REST Framework, React Hooks and a PostgreSQL database, with CRUD functionality. It is an interactive habit-tracker with a social aspect, built in one week.</p>
      </div>
      <div className="project-container">
        <h2>The Natural Wanderer</h2>
        <p>A full-stack app that consumed our own API as well as two external APIs, using the MERN stack. We included embedded and referenced relationships and CRUD functionality. It was built in one week between a group of three. We divided out the necessary tasks evenly depending on priorities, which meant we all worked full-stack. However, personally, I worked on authentication and ensuring secure routes on those that needed it, user profile page, comments and recommendations.</p>
      </div>
      <div className="project-container">
        <h2>Quizavision</h2>
        <p>A trivia quiz React app that consumed an external API and was completely pair-coded within 48 hours.</p>
      </div>
      <div className="project-container">
        <h2>Frogger Re-imagined</h2>
        <p>A browser-based game built in one week with vanilla JavaScript, HTML and CSS. No HTML Canavs! </p>
      </div>
    </div>
  )
}

export default Projects