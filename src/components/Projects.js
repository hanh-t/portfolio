import React from 'react'
import { SiBulma }  from 'react-icons/si'
import p4Home from '../assets/p4Home.jpg'
import resources from '../assets/resources.png'
import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css'
// import p4Intro from '../assets/p4Intro.png'
import p4MainTracker from '../assets/p4MainTracker.png'
import p4Forum from '../assets/p4Forum.png'
// import p4Purchase from '../assets/p4Purchase.gif'
import p3Home from '../assets/p3Home.png'
import weather from '../assets/weather.gif'
import map from '../assets/map.gif'
import quizavisionHome from '../assets/quizavisionHome.gif'
import froggerIntro from '../assets/froggerIntro.png'
import froggerHome from '../assets/froggerHome.png'



const Projects = () => {


  return (
    <>
      <h2>Projects</h2>
      <div className="projects-container">
      
        <div className="project-container">
   
          <h2>HABITUP</h2>
          <div className="slide-container">
            <AwesomeSlider  cssModule={AwesomeSliderStyles}>
              <div data-src={p4Home} />
              <div data-src={resources} />
              {/* <div data-src={p4Intro} /> */}
              <div data-src={p4MainTracker} />
              <div data-src={p4Forum} />
              {/* <div data-src={p4Purchase} /> */}
            </AwesomeSlider>
        
            <p className="project-info">My final, solo project at General Assembly and a full-stack app built using Python, Django REST Framework, React Hooks and a PostgreSQL database, with CRUD functionality. It is an interactive habit-tracker with a social aspect, built in one week.</p>
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

        </div>
        <div className="project-container">
          <h2>The Natural Wanderer</h2>
          <div>
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              <div className="slide" data-src={p3Home} />
              <div className="slide" data-src={weather} />
              <div className="slide" data-src={map} />
            </AwesomeSlider>
        
            <p className="project-info">A full-stack app that consumed our own API as well as two external APIs, using the MERN stack. We included embedded and referenced relationships and CRUD functionality. It was built in one week between a group of three and made use of Semantic UI React for responsive styling.</p>
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
        </div>
        <div className="project-container">
          <h2>Quizavision</h2>
          <div>
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              <div  data-src={quizavisionHome} />
              {/* <div  data-src={weather} />
            <div  data-src={map} /> */}
            </AwesomeSlider>
       
            <p className="project-info">A trivia quiz React app that consumed an external API and was completely pair-coded within 48 hours.</p>
            <div className="project-tech">
              <ul>
                <li><i className="devicon-javascript-plain"></i>
                  <p>JavaScript</p></li>
                <li><i className="devicon-react-original"></i>
                  <p>React.js</p></li>
                <li><SiBulma />
                  <p>Bulma</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-container">
          <h2>Frogger Re-imagined</h2>
          <div className="container">
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              <div  data-src={froggerIntro} />
              <div  data-src={froggerHome} />
              {/* <div  data-src={map} /> */}
            </AwesomeSlider>
        
            <p className="project-info">A browser-based game built in one week with vanilla JavaScript, HTML and CSS. No HTML Canvas! </p>
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
      </div>
    </>
  )
}

export default Projects