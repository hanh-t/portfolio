import React from 'react'
import { Linkedin } from 'react-feather'
import { GitHub } from 'react-feather'
import { Mail } from 'react-feather'

const Contact = () => {
 

  return (
    <div>
      <h2>Contact</h2>
      <a href="https://github.com/hannahtinacci" target="blank" > <GitHub /> GitHub</a>
     
      
      
      <a href="https://www.linkedin.com/in/hannahtinacci/" target="blank" ><Linkedin /> LinkedIn</a>
      <a href="mailto:hannahtinacci@gmail.com" > <Mail /> Email</a>
    </div>
    
  )
}

export default Contact