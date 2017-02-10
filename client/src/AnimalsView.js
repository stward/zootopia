import React from 'react';

var AnimalsView = function(props){
  return (
    <div className="jumbotron">
      <h1 className="display-3">Showing All Animals</h1>
      <ul>
        {
          props.animals.map(function(a){
            return <li> { a.name  + " the " + a.species} </li>
          })
        }
      </ul>
    </div>
  )
}

export default AnimalsView
