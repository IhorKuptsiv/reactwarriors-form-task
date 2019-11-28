import React from "react"

const Basic = props => {
    return (
      <div>
      
        <Field
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          value={props.firtname}
          onChange={props.onChange}
          error={props.errors.firtname}
        />
        <Field
          id="lastname"
          labelText="Lastname"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          value={props.lastname}
          onChange={props.onChange}
          error={props.errors.lastname}
        />
        <Field
        id="password"
        labelText="Password"
        type="password"
        placeholder="Enter password"
        name="password"
        value={props.password}
        onChange={props.onChange}
        error={props.errors.password}
        />
        <Field
        id="repeatPassword"
        labelText="Repeat password"
        type="repeatPassword"
        placeholder="Repeat password"
        name="repeatPassword"
        value={props.repeatPassword}
        onChange={props.onChange}
        error={props.errors.repeatPassword}
        />
  
      </div>
    );
  };
  export default Basic;