import React from 'react';
import $ from 'jquery';
import PostAnimalForm from './PostAnimalForm';

var PostAnimalsContainer = React.createClass({
  getInitialState: function() {
    return {
      name: null,
      species: null,
    }
  },
  updateName(name){
    return this.setState({ name: name })
  },
  updateSpecies(species){
    return this.setState({ species: species })
  },
  handleSubmit(){
    $.ajax({
      url: '/api/animals',
      method: 'POST',
      data: { name: this.state.name, species: this.state.species }
    }).done(function(data){
      console.log(data, "SUCCESS")
    })
  },
  render: function() {
    return <PostAnimalForm handleSubmit={this.handleSubmit} updateName={this.updateName} updateSpecies={this.updateSpecies}/>
  }
})

export default PostAnimalsContainer;
