import React from 'react';
import NavBar from './Navigation';
import Home from './HomeContainer';
import AnimalsContainer from './AnimalsContainer';
import PostAnimalContainer from './PostAnimalContainer';

var App = React.createClass({
  getInitialState: function(){
    return {
      activeComponent: 'home'
    }
  },
  toggleComp(comp){
    return this.setState({ activeComponent: comp})
  },
  renderComponent: function(){
    if(this.state.activeComponent === 'home'){
      return <Home />
    } else if(this.state.activeComponent === 'viewAll'){
      return <AnimalsContainer/>
    } else if(this.state.activeComponent === 'post') {
      return <PostAnimalContainer />
    } else {
      return <div> Loading... </div>
    }

  },
  render: function() {
    return (
      <div>
        <NavBar toggleComp={this.toggleComp}/>
        { this.renderComponent() }
      </div>
    )
  }
})

export default App;
