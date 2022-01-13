import React,{useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Switch, Route} from 'react-router-dom';

import './style.module.css'
import Home from './views/home.jsx'
import Artworks from './views/artworks.jsx'
import Clothing from './views/clothing.jsx'
import Artist from './views/artist.jsx'
import Exhibitions from './views/exhibitions'
import About from './views/about.jsx'
import Contact from './views/contact.jsx'
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx'

function App () {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setLoading(false)
    }, 1500)
  }, [])

  if(loading){
    return (
      <div style={{height:"100vh",width:"100vw"}} >
      <img  style={{display:"block", marginTop:"250px",width:"350px",height:"30%"}} loading="lazy" src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/tpquxqzqvj8pejyi367q.png" alt="" />
    </div>
    );
  }
  else{
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact component={Home} path="/" />
        <Route exact component={Artworks} path="/artworks" />
        <Route exact component={Clothing} path="/clothing" />
        <Route exact component={Artist} path="/artist" />
        <Route exact component={Exhibitions} path="/exhibitions" />
        <Route exact component={About} path="/about" />
        <Route exact component={Contact} path="/contact" />
      </div>
    </Switch>
  )
}
}

ReactDOM.render(<App />, document.getElementById('app'))
