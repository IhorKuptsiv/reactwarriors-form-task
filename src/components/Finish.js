import React from "react"


const Finish = props => {
    return (
      <div>
      
        <Field
          type="file"
          className="form-control-file"
          id="avatar"
          name="avatar"
          value={props.avatar}
          onChange={props.onChange}
         
        />
        
      </div>
    );
  };
  
 
  export default Finish;