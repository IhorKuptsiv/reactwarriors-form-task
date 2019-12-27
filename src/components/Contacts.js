import React from "react"
import Field from "./Field"
import countries from "../data/countries";
import cities from "../data/cities";

const Contacts = props => {
  return (
    <div>
      <Field
        id="email"
        labelText="email"
        type="text"
        placeholder="Enter email"
        name="email"
        value={props.email}
        onChange={props.onChange}
        error={props.errors.email}
      />
      <Field
        id="mobile"
        labelText="mobile"
        type="text"
        placeholder="Enter mobile"
        name="mobile"
        value={props.mobile}
        onChange={props.onChange}
        error={props.errors.mobile}
      />
      <div className="form-group">
      <select
      id="country"
      labelText="country"
      name="country"
      value={props.country}
      onChange={props.onChange}
      error={props.errors.country}
      >
   
      </select>
      
      
   </div>
    <Field
      id="city"
      labelText="city" 
      name="city"
      value={props.city}
      onChange={props.onChange}
      error={props.errors.city}
     />
      

    </div>
    );
  };

export default Contacts;