import React from 'react'

var EditAnimalForm = function(props) {
  return (
      <div>
        <form>
          <label>Name</label>
            <input type='text' placeholder='Name' value={props.animal.name} onChange={(event) => props.onChangeHandler('name', event.target.value)} />
          <label>Species</label>
            <input type='text' placeholder='Species' value={props.animal.species} onChange={(event) => props.onChangeHandler('species', event.target.value)} />
        </form>
        <button onClick={() => props.onSubmit()}>Update Animal</button>
      </div>
    );
}

export default EditAnimalForm
