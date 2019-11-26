import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.component';
import {NoMatch} from './components/NoMatch/NoMatch.components';
import {NavBar} from './components/NavBar/navbar.js';
import {Login} from './components/Login';
import { Signup } from './components/Sign-Up/signup';
import { Help } from "./components/Help/help";
import { Memorial} from './components/Memorial/Memorial';


function App() {
  return (
    <Router>
      <NavBar /> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/Memorial" component={Memorial} />
        <Route path="/signup" component={Signup} /> 
        <Route path="/help" component={Help} />
        <Route component={NoMatch} />
      </Switch>
      
    </Router>
  );
}

export default App;
