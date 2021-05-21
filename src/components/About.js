import React from 'react'
import { Heart } from 'react-feather'

const About = () => {

  return (
    <div id="about">
      <div className="about-container">
      
        <h2 className="header-title"><span className="funky-underline">About me</span></h2>
        <p>My first experience with coding came as a result of my previous job, a 2-day workshop designed to demystify code to Publishers and give more knowledge around third party relationships with digital products. After that I saw day-to-day how instrumental the tech team was in making the products available and the bug started to bite. From there I did a couple of introductory courses on Coursera and Codecademy before finally enrolling on to General Assembly’s Software Engineering Immersive.</p>
        <p>I relish working through problems and have a calm and methodical nature to deal with (almost!) anything that I encounter. I enjoy using JavaScript and React, as well as working full-stack. 
        Together with coding, the web development community is one that I am proud to be a part of. It’s a space for learning and constant improvement, which I value highly and experience on a physical level through my daily yoga practice. 
        </p>
        {/* <h2>My values</h2>
      <p><span role="img" aria-label="star-emoji">✨ </span> </p>
      <p><span role="img" aria-label="star-emoji">✨ </span> </p>
      <p><span role="img" aria-label="star-emoji">✨ </span> </p> */}

        <h2 className="header-title"><span className="funky-underline">A bit more about me</span> and Things I l<Heart color="#ff6666"/>ve</h2>
        <p className="interests"> Yoga – Hand-balancing and inversions – Coffee – Finn – Cat-person – Music – Pastries – Crime dramas – Business autobiographies – Podcasts – Epic sunsets</p>
      </div>
    </div>
  )
}

export default About