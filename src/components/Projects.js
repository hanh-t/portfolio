import React from 'react'
import { SiBulma }  from 'react-icons/si'
import Carousel from 'react-spring-3d-carousel'



const Projects = () => {
  
  const projectSlides1 = [
    {
      key: 1,
      content: <img src="../assets/p4Home.jpg" alt="project4Home"/>,
    },
    {
      key: 2,
      content: <img src="../assets/resources.png" alt="resources"/>,
    }
  ]

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project1-container">
        <Carousel slides={projectSlides1} />
        <h2>HABITUP</h2>
        <p>My final, solo project at General Assembly and a full-stack app built using Python, Django REST Framework, React Hooks and a PostgreSQL database, with CRUD functionality. It is an interactive habit-tracker with a social aspect, built in one week.</p>
        <div className="project-tech">
          <ul>
            <li><i className="devicon-python-plain"></i>
              <p>Python</p>
            </li>
            <li><i className="devicon-django-plain"></i>
              <p>Django</p></li>
            <li><i className="devicon-javascript-plain"></i>
              <p>JavaScript</p></li>
            <li><i className="devicon-react-original"></i>
              <p>React.js</p></li>
            <li><i className="devicon-postgresql-plain"></i>
              <p>PostgreSQL</p></li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <h2>The Natural Wanderer</h2>
        <p>A full-stack app that consumed our own API as well as two external APIs, using the MERN stack. We included embedded and referenced relationships and CRUD functionality. It was built in one week between a group of three and made use of Semantic UI React for responsive styling.</p>
        <div className="project-tech">
          <ul>
            <li><i className="devicon-mongodb-plain"></i>
              <p>MongoDB</p></li>
            <li><i className="devicon-express-original"></i>
              <p>Express.js</p></li>
            <li><i className="devicon-nodejs-plain"></i>
              <p>Node.js</p></li>
            <li><i className="devicon-javascript-plain"></i>
              <p>JavaScript</p></li>
            <li></li>
            <li><i className="devicon-react-original"></i>
              <p>React.js</p></li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <h2>Quizavision</h2>
        <p>A trivia quiz React app that consumed an external API and was completely pair-coded within 48 hours.</p>
        <div className="project-tech">
          <ul>
            <li><i className="devicon-javascript-plain"></i>
              <p>JavaScript</p></li>
            <li></li>
            <li><i className="devicon-react-original"></i>
              <p>React.js</p></li>
            <li><SiBulma />
              <p>Bulma</p></li>
          </ul>
        </div>
      </div>
      <div className="project-container">
        <h2>Frogger Re-imagined</h2>
        <p>A browser-based game built in one week with vanilla JavaScript, HTML and CSS. No HTML Canvas! </p>
        <div className="project-tech">
          <ul>
            <li><i className="devicon-javascript-plain"></i>
              <p>JavaScript</p></li>
            <li><i className="devicon-html5-plain"></i>
              <p>HTML5</p></li>
            <li><i className="devicon-css3-plain"></i>
              <p>CSS3</p></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects