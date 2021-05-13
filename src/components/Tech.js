import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiPython, SiMongodb, SiDjango, SiNodeDotJs, SiPostgresql, SiGithub, SiGit, SiTrello, SiSlack, SiBulma } from 'react-icons/si'

const Tech = () => {

  return (
    <>
      <h2 className="skills-header">Skills and the tech I use</h2>
      <div className="tech-container">
        <aside className="tech-logos">
          <ul></ul>
          <SiJavascript size="5em"/>
          <SiHtml5 size="5em"/>
          <SiCss3 size="5em"/>
          <SiReact size="5em"/>
          <SiNodeDotJs size="5em"/>
          <SiPython size="5em"/>
          <SiMongodb size="5em"/>
          <SiDjango size="5em"/>
          <SiPostgresql size="5em"/>
          <SiGithub size="5em"/>
          <SiGit size="5em"/>
          <SiTrello size="5em"/>
          <SiSlack size="5em"/>
          <SiBulma size="5em"/>
        </aside>
        <p>Not an exhaustive list but the main ones used so far. I am excited to learn new languages and have started on Gatsby and Next.js already.</p>
      </div>
    </>
    

  )
}

export default Tech