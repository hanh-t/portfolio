import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
// import Navbar from './components/Navbar'
// import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Tech from './components/Tech'
// import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Route exact path='/about-me'>
          <About />
        </Route> */}
        <Route exact path='/tech'>
          <Tech />
        </Route>
        <Route exact path='/work'>
          <Projects />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
     
    </BrowserRouter>
  )
}

export default App
