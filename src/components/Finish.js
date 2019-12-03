import React from "react"
import Field from "./Field"
import App from "./App"


const Finish = props => {
  const {
    id,
    labelText,
    type,
    placeholder,
    name,
    value,
    firstname,
    lastname,
    avatar,
    email,
    mobile,
    country,
    city,
    error
  } = props;
  return (
    <div>
    
    <div className="container-fluid">
    <div className="row mb-4">
      <div className="col-4">
        <img width="100%" src={avatar} alt="Ava" />
        <div className="col-8 d-flex align-items-center">
          <h4>
          {firstname} {lastname} {" "}
          </h4>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Mobile:</strong> {mobile}
          </p>
          <p>
            <strong>Location:</strong> {country},{" "}
            {city}
          </p>
        </div>
      </div>
    </div>
  </div>
      
  


    </div>
  );
    // return (
    //   <div>
      
    //   <div className="container-fluid">
    //   <div className="row mb-4">
    //     <div className="col-4">
    //       <img width="100%" src={this.state.avatar} alt="Ava" />
    //       <div className="col-8 d-flex align-items-center">
    //         <h4>
    //           {this.state.firstname} {this.state.lastname}{" "}
    //         </h4>
    //       </div>
    //     </div>

    //     <div className="row mb-4">
    //       <div className="col-12">
    //         <p>
    //           <strong>Email:</strong> {this.state.email}
    //         </p>
    //         <p>
    //           <strong>Mobile:</strong> {this.state.mobile}
    //         </p>
    //         <p>
    //           <strong>Location:</strong> {this.state.country},{" "}
    //           {this.state.city}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
        
    


    //   </div>
    // );
  };
  
 
  export default Finish;