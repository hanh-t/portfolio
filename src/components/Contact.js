import React from 'react'
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import { Mail } from 'react-feather'

const Contact = () => {
 

  return (
    <div className="contact">
      <h2 className="header-title"><span className="funky-underline">Contact</span></h2>
      <div className="contact-links">
        <a href="https://github.com/hannahtinacci" target="_blank" rel="noreferrer"> <GitHub /> <p>GitHub</p></a>
        <a href="https://www.linkedin.com/in/hannahtinacci/" target="_blank" rel="noreferrer"><Linkedin /> <p>LinkedIn</p></a>
        <a href="mailto:hannahtinacci@gmail.com" > <Mail /> <p>Email</p></a>
      </div>
    </div>
    
  )
}

export default Contact