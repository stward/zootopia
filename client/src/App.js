import React from 'react';
import NavBar from './Navigation';
import Home from './HomeContainer';
import AnimalsContainer from './AnimalsContainer';
import PostAnimalContainer from './PostAnimalContainer';
import EditAnimalContainer from './EditAnimalContainer';

var App = React.createClass({
  getInitialState: function(){
    return {
      activeComponent: 'home',
      activeID: null
    }
  },
  toggleComp(comp, id){
    return this.setState({ activeComponent: comp, activeID: id})
  },
  renderComponent: function(){
    if(this.state.activeComponent === 'home'){
      return <Home />
    } else if(this.state.activeComponent === 'viewAll'){
      return <AnimalsContainer toggleComp={this.toggleComp}/>
    } else if(this.state.activeComponent === 'post') {
      return <PostAnimalContainer />
    } else if(this.state.activeComponent === 'edit') {
      return <EditAnimalContainer id={this.state.activeID}/>
    } else {
      return <div> Loading... </div>
    }

  },
  render: function() {
    return (
      <div>
        <NavBar toggleComp={this.toggleComp}/>
        { this.props.children }
      </div>
    )
  }
})

export default App;
