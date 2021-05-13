import React from 'react'
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import { Mail } from 'react-feather'

const Contact = () => {
 

  return (
    <>
      <h2>Contact</h2>
      <div className="contact-links">
        <a href="https://github.com/hannahtinacci" target="_blank" rel="noreferrer"> <GitHub /> GitHub</a>
        <a href="https://www.linkedin.com/in/hannahtinacci/" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
        <a href="mailto:hannahtinacci@gmail.com" > <Mail /> Email</a>
      </div>
    </>
    
  )
}

export default Contact