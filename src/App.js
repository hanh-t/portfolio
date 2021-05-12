import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Tech from './components/Tech'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about-me'>
          <About />
        </Route>
        <Route exact path='/tech'>
          <Tech />
        </Route>
        <Route exact path='/work'>
          <Work />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
