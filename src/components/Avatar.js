import React from "react"
import Field from "./Field"


      
      const Avatar = props => {
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
  
 
  export default Avatar;