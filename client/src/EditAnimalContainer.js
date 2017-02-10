import React from 'react';
import $ from 'jquery';

var EditAnimalContainer = React.createClass({
  getInitialState: function() {
    return {
      name: null,
      species: null
    }
  },
  componentDidMount: function() {
    this.loadAnimalFromServer();
  },
  updateName(name){
    return this.setState({ name: name })
  },
  updateSpecies(species){
    return this.setState({ species: species })
  },
  loadAnimalFromServer() {
    var self = this;
    $.ajax({
      url: '/api/animals/' + this.props.id,
      method: 'GET',
    }).done(function(data){
      self.setState({ name: data.name, species: data.species })
    })
  },
  handleSubmit(){
    $.ajax({
      url: '/api/animals/' + this.props.id,
      method: 'PUT',
      data: { name: this.state.name, species: this.state.species }
    }).done(function(data){
      console.log(data, "SUCCESS")
    })
  },
  render: function() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">Zootopia</h1>
        <p className="lead">{ this.state.name ? this.state.name : "nothing yet"}</p>
      </div>
    )
  }
})

export default EditAnimalContainer;
