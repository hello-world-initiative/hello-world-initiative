import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Community from './pages/Community';
import Events from './pages/Events';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="page">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/events" component={Events} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
