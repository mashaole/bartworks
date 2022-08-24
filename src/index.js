import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./style.module.css";
import Home from "./views/home.jsx";
import Artworks from "./views/artworks.jsx";
import Clothing from "./views/clothing.jsx";
import Artist from "./views/artist.jsx";
import Exhibitions from "./views/exhibitions";
import About from "./views/about.jsx";
import Contact from "./views/contact.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  if (loading) {
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <img
          style={{
            display: "block",
            marginTop: "250px",
            width: "350px",
            height: "30%",
          }}
          loading="lazy"
          src="https://res.cloudinary.com/ddjvdcads/image/upload/v1661348831/b%20artworks_2021-12-20_19_11/exhibit/dqxzulpumewb2pf7mqxj.png"
          alt=""
        />
      </div>
    );
  } else {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/artworks" component={Artworks} />
          <Route exact path="/clothing" component={Clothing} />
          <Route exact path="/artist" component={Artist} />
          <Route exact path="/exhibitions" component={Exhibitions} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

serviceWorkerRegistration.register();
reportWebVitals();
