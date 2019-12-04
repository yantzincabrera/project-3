import React from 'react';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home.component';
import {NoMatch} from './components/NoMatch/NoMatch.components';

import {NavBar} from './components/NavBar/navbar.js';
import Login from './components/Login';
import  Register  from './components/Sign-Up/signup.js';
import { Help } from "./components/Help/help";
import { Memorial} from './components/Memorial/Memorial';
import EssayForm from './components/UserPost/UserPost'
//import  Landing  from './components/NavBar/navbar';
import {Signup} from './components/Sign-Up/signup';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />

        <Route path="/Memorial" component={Memorial} />
        <Route path="/signup" component={Register} /> 
        <Route path="/UserPost" component={EssayForm} />

        <Route path="/help" component={Help} />
        <Route component={NoMatch} />

      </Switch>
      
    </Router>
  );
}

export default App;
