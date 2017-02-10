import React from 'react';

var PostAnimalForm = function(props) {
  return (
    <div className="">
      <div className="page-header">
        <h2>Create Animal</h2>
      </div>
      <div className="">
        <form onSubmit={props.handleSubmit}>
          <fieldset className="form-group">
            <label>animal name</label>
            <input required="true" onChange={props.updateName.bind(this, event.target.value)}
              type="text" className="form-control" id="" placeholder="name"
            />
          </fieldset>
          <fieldset className="form-group">
            <label>animal name</label>
            <input required="true" onChange={props.updateSpecies.bind(this, event.target.value)}
              type="text" className="form-control" id="" placeholder="species"
            />
          </fieldset>
          <button type="submit" className="btn btn-primary my-primary-btn">Create</button>
        </form>
      </div>
    </div>
  )
}

export default PostAnimalForm;
