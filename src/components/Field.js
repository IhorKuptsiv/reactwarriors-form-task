import React from "react"

const Field = props => {
    const {
      id,
      labelText,
      type,
      placeholder,
      name,
      value,
      onChange,
      error
    } = props;
    return (
      <div className="form-group">
        <label htmlFor={id}>{labelText}</label>
        <input
          id={id}
          type={type}
          className="form-control"
          placeholder={placeholder}
          //  ref={node => (this.firstname = node)}
          name={name}
          value={value} //{this.state.firstname}
          onChange={onChange} //{this.onChangeFirstName}
        />
        {/*this.state.errors.firstname ? (*/}
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