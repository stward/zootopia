import React from 'react'

var PostAnimalForm = function(props) {
  return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor='animalName'>Name</label>
            <input type='text' placeholder='Name' id='animalName' onChange={(event) => props.onChangeHandler('name', event.target.value)} />
          </div>
          <div className='form-group'>
            <label htmlFor='animalSpecies'>Species</label>
            <input type='text' placeholder='Species' id='animalSpecies' onChange={(event) => props.onChangeHandler('species', event.target.value)} />
          </div>
        </form>
        <button className='btn' onClick={() => props.onSubmit()}>Add Animal</button>
      </div>
    );
}

export default PostAnimalForm
