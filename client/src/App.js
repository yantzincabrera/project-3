import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import {NoMatch} from './components/NoMatch/NoMatch.components';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
   
  );
}

export default App;
