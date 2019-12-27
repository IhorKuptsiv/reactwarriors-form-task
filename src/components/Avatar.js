import React from "react"
import Field from "./Field"
import DefLogo from "../data/def-avatar.png"

     
      
      const Avatar = props => {
        return (
          <div>
      <div className="form-group">
        <label htmlFor="avatar"> </label>
        <img className="mb-4" width="100%" src={props.avatar ? props.avatar : DefLogo} alt="Avatar pic" />
        <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id="customFile"
          name="customFile"
          onChange={props.onChangeAvatar}
        />
        <label className="custom-file-label" htmlFor="customFile">Choose avatar</label>
        </div>
      </div>
    </div>
        );
      };
  
      
  export default Avatar;