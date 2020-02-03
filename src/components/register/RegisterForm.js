import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {

  state = {
    emailInput: "",
    passwordInput: ""
  };

  emailInputChangeHandler = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  passwordInputChangeHandler = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  handleRegisterClick = () => {
    axios.post("http://172.22.13.38:1323/users", {
        email: this.state.emailInput,
        password: this.state.passwordInput
      })
      .then(response => {
          this.props.history.push("/login");
      })
      .catch(error => {
        console.log("register error:", error);
      });
  };

  render() {
    const { emailInput, passwordInput } = this.state;

    return (
      <div>
        <h3>Register</h3>
        <div>
          <div>Email</div>
          <input value={emailInput} onChange={this.emailInputChangeHandler}/>
        </div>
        <div>
          <div>Password</div>
          <input type="password" value={passwordInput} onChange={this.passwordInputChangeHandler}/>
        </div>
        <button onClick={this.handleRegisterClick}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;