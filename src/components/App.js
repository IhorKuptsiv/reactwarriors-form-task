import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Field from "./Field"
export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
     // firstname: "",
     // lastname: "",
     // password: "",
     // repeatPassword: "",
      gender: "male",
      currentStep: 1,

      email: "",
      mobile: "",
      country: "1",
      city: "1",

      avatar: "",

      errors: {
        firstname: "",
        lastname: "",
        password: "",
        repeatPassword: "",

        email: "",
        mobile: "",
        // country: "",
        city: ""
      }
    };
  }

  
  onChangeFirstName = event => {
    this.setState({
      firstname: event.target.value
    });
  };

  onChangeLastName = event => {
    this.setState({
      lastname: event.target.value
    });
  };

  onChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  onChangeRepeatPassword = event => {
    this.setState({
      repeatPassword: event.target.value
    });
  };

  onChangeGender = event => {
    this.setState({
      gender: event.target.value
    });
  };

  onChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  onChangeMobile = event => {
    this.setState({
      mobile: event.target.value
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleNext = () => {
    //event.preventDefault();
    const errors = {};
    if (this.state.currentStep === 1) {
      if (this.state.firstname.length < 4) {
        //errors.firstname = true;
        errors.firstname = "Must be 4 characters or more";
      }

      if (this.state.lastname.length < 4) {
       // errors.lastname = true;
       errors.lastname = "Must be 4 characters or more";
      }

      if (this.state.password.length < 2) {
       // errors.password = true;
        errors.password = "Must be 2 characters or more";
      }

      if (this.state.password !== this.state.repeatPassword) {
       // errors.repeatPassword = true;
       errors.repeatPassword = "Must be equal";
      }
    }

    if (this.state.currentStep === 2) {
      if (this.state.email.length < 5) {
        errors.email = true;
      }

      if (this.state.mobile.length < 5) {
        errors.mobile = true;
      }
    }

    console.log(Object.keys(errors));

    if (Object.keys(errors).length === 0) {
      this.setState({
        currentStep: this.state.currentStep + 1
      });
    } else {
      this.setState({
        errors: errors
      });
    }
  };

  handlePrev = event => {
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  };
  //country
  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };
  //city
  
  getOptionsItemsCity = items => {
    for (let key in items){
     return 0;
     };
  };


  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.setState({
        avatar: event.target.result
      });
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    // console.log(this);
    return (
      //<div className="App">

      <div className="form-container card">
        <form className="form card-body">
        
        <div className="steps mb-4">

        <div className="step is-active">
        <div className="step__marker">{this.state.currentStep}</div>
        <div className="step__title mt-1">Basic</div></div>
        
        <div className="step">
        <div className="step__marker">{this.state.currentStep+1}</div>
        <div className="step__title mt-1">Contacts</div></div>

        <div className="step">
        <div className="step__marker">{this.state.currentStep+2}</div>
        <div className="step__title mt-1">Avatar</div></div>

        <div className="step">
        <div className="step__marker">{this.state.currentStep+3}</div>
        <div className="step__title mt-1">Finish</div></div>
        </div>
        

          {/* -------------------------- 1 STEP ---------------------------------- */}
          {this.state.currentStep === 1 ? (
            <div>
            
            <Field 
            id="firstname"
            labelText="Firstname"
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={this.state.firstname}
            onChange={this.onChangeFirstName}
            error={this.state.errors.firstname}
            />
            
            <Field 
            id="lastname"
            labelText="Lastname"
            type="text"
            placeholder="Enter lastname"
            name="lastname"
            value={this.state.lastname}
            onChange={this.onChangeLastName}
            error={this.state.errors.lastname}
            />

            <Field 
            id="password"
            labelText="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            error={this.state.errors.password}
            />

            <Field 
            id="repeatPassword"
            labelText="Repeat password"
            type="repeatPassword"
            placeholder="Repeat password"
            name="repeatPassword"
            value={this.state.repeatPassword}
            onChange={this.onChangeRepeatPassword}
            error={this.state.errors.repeatPassword}
            />

          
            
              <div className="form-check">
                <div>Gender</div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.onChange}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.onChange}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          ) : null}

          {/* -------------------------- 2 STEP ---------------------------------- */}
          {this.state.currentStep === 2 ? (
            <div>
              2st
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter email"
                  ref={node => (this.email = node)}
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                {this.state.errors.email ? (
                  <div className="invalid-feedback">Email must be filled</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter mobile"
                  ref={node => (this.mobile = node)}
                  name="email"
                  value={this.state.mobile}
                  onChange={this.onChangeMobile}
                />
                {this.state.errors.mobile ? (
                  <div className="invalid-feedback">
                    Phone number must be filled
                  </div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                  className="form-control"
                  id="country"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                >
                  {this.getOptionsItems(countries)}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="city"> City </label>
                <select
                  className="form-control"
                  id="city"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                >
                  {this.getOptionsItemsCity(countries)}
                </select>
              </div>
            </div>
          ) : null}

          {/* -------------------------- 3 STEP ---------------------------------- */}
          {this.state.currentStep === 3 ? (
            <div>
              3st
              <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="avatar"
                  name="avatar"
                  onChange={this.onChangeAvatar}
                />
                <img
                  className="mb-4"
                  width="50%"
                  src={this.state.avatar}
                  alt="Avatar"
                />
              </div>
            </div>
          ) : null}

          {/* -------------------------- 4 STEP ---------------------------------- */}
          {this.state.currentStep === 4 ? (
            <div>
              4st
              <div className="container-fluid">
                <div className="row mb-4">
                  <div className="col-4">
                    <img width="100%" src={this.state.avatar} alt="Ava" />
                    <div className="col-8 d-flex align-items-center">
                      <h4>
                        {this.state.firstname} {this.state.lastname}{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-12">
                      <p>
                        <strong>Email:</strong> {this.state.email}
                      </p>
                      <p>
                        <strong>Mobile:</strong> {this.state.mobile}
                      </p>
                      <p>
                        <strong>Location:</strong> {this.state.country},{" "}
                        {this.state.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          <div className="d-flex justify-content-center">
            <button
              type="button"
              onClick={this.handlePrev}
              className="btn btn-light mr-4 "
            >
              Previous
            </button>

            <button
              type="button"
              onClick={this.handleNext}
              className="btn btn-secondary "
            >
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}