import React from 'react'

var PostAnimalForm = function(props) {
  return (
      <div>
        <form>
          <label>Name</label>
            <input type='text' placeholder='Name' onChange={(event) => props.onChangeHandler('name', event.target.value)} />
          <label>Species</label>
            <input type='text' placeholder='Species' onChange={(event) => props.onChangeHandler('species', event.target.value)} />
        </form>
        <button onClick={() => props.onSubmit()}>Add Animal</button>
      </div>
    );
}

export default PostAnimalForm
