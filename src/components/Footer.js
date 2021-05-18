import React from 'react'
import { FiChevronsUp } from 'react-icons/fi'

const Footer = () => {

  return (
    <footer>
      <div className="footer-icon">
        <a href="#home"><FiChevronsUp size="2em"/></a>
        <small>back to top</small>
      </div>
      <p> &copy; hannahtinacci.com 2021 </p>
    </footer>
  )
}

export default Footer