import React from "react"
import Field from "./Field"

     
      
      const Avatar = props => {
        return (
          <div>
      <div className="form-group">
        <label htmlFor="avatar"> </label>
        <img width="100%" src={props.avatar} alt="Ava" />
        <input
          type="file"
          className="form-control-file"
          id="avatar"
          name="avatar"
          onChange={props.onChangeAvatar}
        />
      </div>
    </div>
        );
      };
  
 
  export default Avatar;