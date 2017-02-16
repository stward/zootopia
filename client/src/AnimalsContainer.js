import React from 'react'
import AnimalsTable from './AnimalsTable'
import $ from 'jquery'

// stateful component
var AnimalsContainer = React.createClass({
  getInitialState: function() {
    return ({animals: null})
  },
  componentWillMount: function() {
    this.getAnimalsFromServer();
  },
  getAnimalsFromServer: function() {
    var that = this
    $.ajax({
      url: '/api/animals',
      method: 'GET'
    }).done(function(data) {
      that.setState({animals: data})
    })
  },
  deleteHandler: function(id) {
    $.ajax({
      url: '/api/animals/' + id,
      method: 'DELETE'
    }).done(function(data) {
      console.log('deleted animal with id: ' + id);
    })
    var newData = this.state.animals.filter(function(item) {
      return item._id !== id
    })
    this.setState({animals: newData})
  },
  render: function() {
    return (
      <div>
        {this.state.animals ? <AnimalsTable animals={this.state.animals} deleteHandler={this.deleteHandler} /> : null}
      </div>
    )
  }
})

export default AnimalsContainer
