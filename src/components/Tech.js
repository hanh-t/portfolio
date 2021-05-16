import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiMongodb, SiDjango, SiNodeDotJs, SiPostgresql, SiGithub, SiGit, SiTrello, SiSlack, SiBulma } from 'react-icons/si'

const Tech = () => {

  return (
    <div className="tech-skills-container">
      <h2 className="skills-header">Skills and the tech I use</h2>
      <div className="tech-container">
        <aside className="tech-logos">
          <ul>
            <li><p><SiJavascript /></p>
              <p>JavaScript</p></li>
            <li><p><SiHtml5 /></p>
              <p>HTML5</p></li>
            <li><p><SiCss3 /></p>
              <p>CSS3</p></li>
            <li><p><SiReact /></p>
              <p>React.js</p></li>
            <li><p><SiNodeDotJs /></p>
              <p>Node.js</p></li>
            <li><p><SiPython /></p>
              <p>Python</p></li>
            <li><p><SiMongodb /></p>
              <p>MongoDB</p></li>
            <li><p><SiDjango /></p>
              <p>Django</p></li>
            <li><p><SiPostgresql /></p>
              <p>PostgreSQL</p></li>
            <li><p><SiGithub /></p>
              <p>GitHub</p></li>
            <li><p><SiGit /></p>
              <p>Git</p></li>
            <li><p><SiTrello /></p>
              <p>Trello</p></li>
            <li><p><SiSlack /></p>
              <p>Slack</p></li>
            <li><p><SiBulma /></p>
              <p>Bulma</p></li>
          

          </ul>
        </aside>
        <p className="tech-para">Not an exhaustive list but the main ones used so far. I am excited to learn new languages and have started on Gatsby and Next.js already.</p>
      </div>
    </div>
    

  )
}

export default Tech