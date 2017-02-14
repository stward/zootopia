import React from 'react';
import {Table, Button} from 'react-bootstrap';

function AnimalsTable(props) {
  var animals = props.animals.map(function(item) {
    return <tr>
             <td>{item.name}</td>
             <td>{item.species}</td>
             <td><Button bsStyle="primary" onClick={(id) => props.deleteHandler(item._id)}>Delete</Button></td>
             <td><Button bsStyle="primary" onClick={(id) => props.updateHandler(item._id)}>Update</Button></td>
           </tr>;
  });
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {animals}
      </tbody>
    </Table>
  )
}

export default AnimalsTable;
