import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Field from "./Field";
import Basic from "./Basic";
import Contacts from "./Contacts";
import Avatar from "./Avatar";
import Finish from "./Finish";



export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentStep: 1,
      firstname: "",
      lastname: "",
      password: "",
      repeatPassword: "",
      gender: "male",
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
        country: "",
        city: ""
      }
    };
  }

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
    for (let key in items) {
      return 0;
    }
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
            <div
              className={`step ${
                1 <= this.state.currentStep ? "is-active" : ""
              }`}
            >
              <div className="step__marker">1</div>
              <div className="step__title mt-1">Basic</div>
            </div>

            <div
              className={`step ${
                2 <= this.state.currentStep ? "is-active" : ""
              }`}
            >
              <div className="step__marker">2</div>
              <div className="step__title mt-1">Contacts</div>
            </div>

            <div
              className={`step ${
                3 <= this.state.currentStep ? "is-active" : ""
              }`}
            >
              <div className="step__marker">3</div>
              <div className="step__title mt-1">Avatar</div>
            </div>

            <div
              className={`step ${
                4 <= this.state.currentStep ? "is-active" : ""
              }`}
            >
              <div className="step__marker">4</div>
              <div className="step__title mt-1">Finish</div>
            </div>
          </div>
    {/* -------------------------- 1 STEP ---------------------------------- */}
        {this.state.currentStep === 1 ? (
          <div>
          <Basic
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          onChange={this.onChange}
          errors={this.state.errors}
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
         <Contacts
          email={this.state.email}
          mobile={this.state.mobile}
          country={this.state.country}
          city={this.state.city}
          onChange={this.onChange}
          errors={this.state.errors}
        />
        </div>
        ) : null}
{/* -------------------------- 3 STEP ---------------------------------- */}
        {this.state.currentStep === 3 ? (
          <div>
        <Avatar
        avatar={this.state.avatar}
        onChange={this.onChange}
        errors={this.state.errors}
        />
        </div>
        ) : null}
{/* -------------------------- 4 STEP ---------------------------------- */}
        {this.state.currentStep === 4 ? (
          <div>
        <Finish
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
        mobile={this.state.mobile}
        country={this.state.country}
        city={this.state.city}
        avatar={this.state.avatar}
        />
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
