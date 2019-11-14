import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";

export default class App extends React.Component {

    constructor() {
      super();
  
      this.state = {
        firstname: "", 
        lastname: "", 
        password: "",   
        repeatPassword: "",  
        gender: "male", 
        firstStep: 1,
        secondStep: 2,
        thirdStep: 3,
        fourStep: 4

        errors: {
          username: false,
          password: false,
          repeatPassword: false,
        },
      }
    }


    // дає можливість вводити дані
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
  
    onNext = event => {
      event.preventDefault();
      // console.log("refs", this.username.value, this.password.value);
      console.log("next", this.state);
    };
  
    onNext =  (event) => {
      event.preventDefault();  // обнуляєм event  
     // console.log("refs",this.username.value, this.password.value); //value - виводим в консолі Ihor 123
     // Валідація
    const errors = {}
    if(this.state.firstname.length < 4) {
    errors.firstname = "Mast be 4 characters of more";
    }

    if(Object.keys(errors).length > 0) {
      //error
      this.setState({
        errors: errors
      });
    }else {
      //  обнуляєм 
    this.setState({
    errors: {}
    });
      console.log ("next", this.state)
    }

    }


    render() {
      // console.log(this);
      return (
        <div className="form-container card">
          <form className="form card-body">



            <div className="form-group">
              <label>Firstname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter firstname"
                ref={node => (this.firstname = node)}
                name="firstname"
                value={this.state.firstname}
                onChange={this.onChangeFirstName}
              />
            </div>

            <div className="form-group">
              <label>Lastname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter lastname"
                ref={node => (this.lastname = node)}
                name="lastname"
                value={this.state.lastname}
                onChange={this.onChangeLastName}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter password"
                ref={node => (this.password = node)}
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>

            <div className="form-group">
              <label>Repeat password</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter repeat password"
                ref={node => (this.repeatPassword = node)}
                name="repeatPassword"
                value={this.state.repeatPassword}
                onChange={this.onChangeRepeatPassword}
              />
            </div>
          
          <div className= "form-check">
            <div>Gender</div>
            <div className="form-check">
            <input className="form-check-input" 
            type="radio" id="male" name="gender" value="male"
            checked={this.state.gender === "male"}
            onChange={this.onChange}
            />
            <label className="form-check-label" htmlFor="male">
            Male
            </label>
            </div>

            <div className="form-check">
            <input className="form-check-input" 
            type="radio" id="female" name="gender" value="female"
            checked={this.state.gender === "female"}
            onChange={this.onChange}/>
            <label className="form-check-label" htmlFor="female">
            Female
            </label>
            </div>
          </div>

          <div className="d-flex justify-content-center" >

          <button 
              type="previous"
              className="btn btn-light mr-4 "
              onClick={this.onNext}
            >
              Previous
            </button>

            <button 
              type="next"
              className="btn btn-secondary "
              onClick={this.onNext}
            >
              Next
            </button>

            </div>

          </form>
        </div>
      );
    }
  }