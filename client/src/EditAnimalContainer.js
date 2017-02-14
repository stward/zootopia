import React from 'react'
import EditAnimalForm from './EditAnimalForm'
import $ from 'jquery'

var EditAnimalContainer = React.createClass ({
  getInitialState: function() {
    return (
      {name: null, species: null}
    )
  },
  componentWillMount: function() {
    this.getAnimalById();
  },
  getAnimalById: function() {
    var that = this
    $.ajax({
      url: '/api/animals/' + this.props.animalId,
      method: 'GET'
    }).done(function(data) {
      console.log(data);
      that.setState(data)
    })
  },
  onChangeHandler: function(field, value) {
    var newData = {}
    newData[field] = value
    this.setState(newData)
  },
  onSubmit: function() {
    var that = this
    $.ajax({
      url: '/api/animals/' + this.props.animalId,
      method: 'PUT',
      data: this.state
    }).done(function(data) {
      console.log(data)
      that.props.updateActiveComponent('viewAll', null)
    })
  },
  render: function() {
    return (
      <div>
        <EditAnimalForm onChangeHandler={this.onChangeHandler} onSubmit={this.onSubmit} animal={this.state} />
      </div>
    )
  }
})

export default EditAnimalContainer
