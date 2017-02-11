import React from 'react';
import { Link } from 'react-router';

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
              <button className="btn btn-warning">
                <Link to={"/edit/" + a._id}> Edit Animal </Link>
              </button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default AnimalsView
