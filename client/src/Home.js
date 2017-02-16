import React from 'react'
import {Link} from 'react-router'

var Home = function(props) {
  return (
    <div>
      <h1>Zootopia</h1>
      <Link to={'/animals'} className='btn btn-primary'>View All Animals</Link>
      <Link to={'/newAnimal'} className='btn btn-primary'>New Animal</Link>
    </div>
  )
}

export default Home
