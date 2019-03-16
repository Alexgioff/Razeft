import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from '../Routes/Home';
import MoviesPage from '../Routes/Movies';
import tvSeriesPage from '../Routes/TvSeries';

const App = () =>  {
  return (
    <Router>
      <Switch>
          <Route exact path="/"  render={() => (<Home />)}/>
          <Route path="/movies" component={MoviesPage}/>
          <Route path="/tv" component={tvSeriesPage}/>
      </Switch>
    </Router>
  );
}


export default App;
