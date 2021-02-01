
import './App.css';
import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";

import Catchphrase from './components/catchphrase.js';
import Greeting from './components/greeting.js';
import Home from './components/home.js';


const App = () => (
  <HashRouter basename="/">
    <div>
      <div class="topnav" id="myTopnav" expand="md">
        <Link to="/" class="link">Home</Link>
        <Link to="/catchphrase" class="link">Catchphrase</Link>
        <Link to="/greeting" class="link">Greeting</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/catchphrase" component={Catchphrase} />
      <Route path="/greeting" component={Greeting} />
    </div>
  </HashRouter>
);

export default App;
