import React from 'react';
import NavBar from './Navigation';
import Home from './HomeContainer';

var App = React.createClass({
  getInitialState: function(){
    return {
      activeComponent: 'home'
    }
  },
  renderComponent: function(){
    return <Home />
  },
  render: function() {
    return (
      <div>
        <NavBar />
        { this.renderComponent() }
      </div>
    )
  }
})

export default App;
