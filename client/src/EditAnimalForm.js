import React from 'react';

var EditAnimalForm = function(props) {
  return (
    <div className="">
      <div className="page-header">
        <h2>Edit Animal</h2>
      </div>
      <div className="">
        <form onSubmit={props.handleSubmit}>
          <fieldset className="form-group">
            <label>animal name</label>
            <input required="true" onChange={ function(event){ return props.onFieldChange('name', event.target.value) }}
              value={props.name} type="text" className="form-control" id="" placeholder={props.name}
            />
          </fieldset>
          <fieldset className="form-group">
            <label>animal species</label>
            <input required="true" onChange={ function(event){ return props.onFieldChange('species', event.target.value) }}
              value={props.species} type="text" className="form-control" id="" placeholder={props.species}
            />
          </fieldset>
          <button type="submit" className="btn btn-primary my-primary-btn">Create</button>
        </form>
      </div>
    </div>
  )
}

export default EditAnimalForm;
