import React from "react"

const Field = props => {
  const {
      id,
      labelText,
      type, 
      placeholder, 
      firstname, 
      value, 
      onChangeFirstName, 
      error
    } = props;
return(

    <div className="form-group">
    <label htmlFor={id}>{labelText}</label>
    <input
      id={id}
      type={type}
      className="form-control"
      placeholder={placeholder}
    //  ref={node => (this.firstname = node)}
      name={firstname}
      value={value}//{this.state.firstname}
      onChange= {onChangeFirstName} //{this.onChangeFirstName}
    />
   { /*this.state.errors.firstname ? (*/}
    {error ? (
      <div className="invalid-feedback">
    {error}
    {/*Must be 4 characters or more*/}
      </div>
    ) : null}
  </div>

);
};

export default Field;