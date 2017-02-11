import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './HomeContainer';
import Animals from './AnimalsContainer';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/animals" component={Animals}/>
    </Route>
  </Router>
), document.getElementById('root'))
