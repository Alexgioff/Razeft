import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from '../Routes/Home';
import Test from '../Routes/Test';


const App = () =>  {
  return (
    <Router>
      <Switch>
          <Route exact path="/"  render={() => (<Home />)}/>
          <Route path="/test" render={() => (<Test />)} />
      </Switch>
    </Router>
  );
}


export default App;
