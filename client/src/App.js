import React from 'react';
import {Link} from 'react-router'

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul className='nav nav-tabs'>
          <li role='presentation'>
            <Link to={'/'}>Home</Link>
            <Link to={'/animals'}>All Animals</Link>
            <Link to={'/newAnimal'}>New Animal</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export default App
