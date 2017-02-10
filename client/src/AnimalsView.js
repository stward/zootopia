import React from 'react';

var AnimalsView = function(props){
  return (
    <div className="jumbotron">
      <h1 className="display-3">Showing All Animals</h1>
      <ul>
        {
          props.animals.map(function(a){
            return <li> { a.name  + " the " + a.species}
              <button onClick={props.deleteAnimal.bind(this, a._id)} className="btn btn-danger">
                Delete
              </button>
              <button onClick={props.toggleComp.bind(this,'edit', a._id)} className="btn btn-warning">
                Edit
              </button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default AnimalsView
