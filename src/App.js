import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import Footer from './components/Footer';

import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          {/* <Route path="/About">
            <About />
          </Route> */}

          <Route path="/Projects">
            <Projects />
          </Route>

          <Route path="/Contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
