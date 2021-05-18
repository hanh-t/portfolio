import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiMongodb, SiDjango, SiNodeDotJs, SiPostgresql, SiGithub, SiGit, SiTrello, SiSlack, SiBulma } from 'react-icons/si'

const Tech = () => {

  return (
    <div className="main-tech-container">
     
      <h2 className="header-title">Skills and the tech I use</h2>
      <div className="tech-container">
        <aside className="tech-logos">
          <ul>
            <li><p><SiJavascript size="4em" color="#818aa3"/></p>
              <p>JavaScript</p></li>
            <li><p><SiHtml5 size="4em" color="#818aa3"/></p>
              <p>HTML5</p></li>
            <li><p><SiCss3 size="4em"color="#818aa3"/></p>
              <p>CSS3</p></li>
            <li><p><SiReact size="4em" color="#818aa3"/></p>
              <p>React.js</p></li>
            <li><p><SiNodeDotJs size="4em" color="#818aa3"/></p>
              <p>Node.js</p></li>
            <li><p><SiPython size="4em" color="#818aa3"/></p>
              <p>Python</p></li>
            <li><p><SiMongodb size="4em" color="#818aa3"/></p>
              <p>MongoDB</p></li>
            <li><p><SiDjango size="4em" color="#818aa3"/></p>
              <p>Django</p></li>
            <li><p><SiPostgresql size="4em" color="#818aa3"/></p>
              <p>PostgreSQL</p></li>
            <li><p><SiGithub size="4em" color="#818aa3"/></p>
              <p>GitHub</p></li>
            <li><p><SiGit size="4em" color="#818aa3"/></p>
              <p>Git</p></li>
            <li><p><SiTrello size="4em" color="#818aa3"/></p>
              <p>Trello</p></li>
            <li><p><SiSlack size="4em" color="#818aa3"/></p>
              <p>Slack</p></li>
            <li><p><SiBulma size="4em" color="#818aa3"/></p>
              <p>Bulma</p></li>
          

          </ul>
        </aside>
        <p className="tech-para">These are the tools and languages worked with so far. I am excited to learn new languages and have started on Gatsby and Next.js already.</p>
      </div>
    </div>
    

  )
}

export default Tech