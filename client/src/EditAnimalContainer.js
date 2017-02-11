import React from 'react';
import $ from 'jquery';
import EditAnimalForm from './EditAnimalForm';

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
      url: '/api/animals/' + this.props.params.animalId,
      method: 'GET',
    }).done(function(data){
      self.setState({ name: data.name, species: data.species })
    })
  },
  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  },

  handleSubmit(){
    $.ajax({
      url: '/api/animals/' + this.props.params.animalId,
      method: 'PUT',
      data: { name: this.state.name, species: this.state.species }
    }).done(function(data){
      console.log(data, "SUCCESS")
    })
  },
  render: function() {
    return <EditAnimalForm handleSubmit={this.handleSubmit}
            onFieldChange={this.onFieldChange}
            updateName={this.updateName}
            updateSpecies={this.updateSpecies}
            name={this.state.name}
            species={this.state.species}
          />
  }
})

export default EditAnimalContainer;
