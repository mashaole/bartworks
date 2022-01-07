import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Home from './views/home.jsx'
import Artworks from './views/artworks.jsx'
import Clothing from './views/clothing.jsx'
import Artist from './views/artist.jsx'
import About from './views/about.jsx'
import Contact from './views/contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact component={Home} path="/" />
        <Route exact component={Artworks} path="/artworks" />
        <Route exact component={Clothing} path="/clothing" />
        <Route exact component={Artist} path="/artist" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
