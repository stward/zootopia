import React from 'react'

var Home = function(props) {
  return (
    <div>
      <h1>Zootopia</h1>
      <button onClick={() => props.updateActiveComponent('viewAll')}>View All Animals</button>
      <button onClick={() => props.updateActiveComponent('postNew')}>Post New Animal</button>
    </div>
  )
}

export default Home
