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
  render: function() {
    return (
      <div>
        <AnimalsTable animals={this.state.animals} />
      </div>
    )
  }
})

export default AnimalsContainer
