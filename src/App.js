import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Sport from './pages/Sport';
import Teknologi from './pages/Teknologi';
import Science from './pages/Science';
import Bisnis from './pages/Bisnis';

import './assets/scss/style.scss';
import { createBrowserHistory } from 'history';

function App() {
  const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
  })

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/sport" component={Sport}></Route>
        <Route exact path="/technology" component={Teknologi}></Route>
        <Route exact path="/science" component={Science}></Route>
        <Route exact path="/bisnis" component={Bisnis}></Route>
      </Switch>
    </Router>
  );
}

export default App;
