import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './App';
import Home from './Home';
import AnimalsContainer from './AnimalsContainer'
import PostAnimalContainer from './PostAnimalContainer'
import EditAnimalContainer from './EditAnimalContainer'
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/animals' component={AnimalsContainer} />
      <Route path='/newAnimal' component={PostAnimalContainer} />
      <Route path='/editAnimal/:animalId' component={EditAnimalContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
