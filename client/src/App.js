import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.component';
import {NoMatch} from './components/NoMatch/NoMatch.components';
import {NavBar} from './components/NavBar/navbar.js';
import {Login} from './components/Login.js';
import {CrtLogin} from './components/CrtLogin/CrtLogin.js';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/crtlogin" component={CrtLogin} />
        <Route component={NoMatch} />
      </Switch>
      
    </Router>
  );
}

export default App;
