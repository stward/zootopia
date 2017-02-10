import React from 'react';
import $ from 'jquery';
import AnimalsView from './AnimalsView';

var AnimalsContainer = React.createClass({
  getInitialState() {
    return {
      animals: null
    }
  },
  componentDidMount() {
    this.loadAnimalsFromServer();
  },
  deleteAnimal(id){
    console.log(id)
    if(!confirm("Are you sure you want to delete animal?")){ return }
    $.ajax({
      url: '/api/animals/' + id,
      method: 'DELETE'
    }).done(function(data){
      window.location = '/';
    })
  },
  loadAnimalsFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/animals',
      method: 'GET'
    }).done(function(data){
      console.log(data)
      self.setState({ animals: data })
    })
  },
  render: function() {
    return this.state.animals ? <AnimalsView deleteAnimal={this.deleteAnimal} animals={this.state.animals}/> : <div> Loading... </div>
  }
});

export default AnimalsContainer;
