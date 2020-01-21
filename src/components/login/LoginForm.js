import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {

  state = {
    emailInput: "a@a.a",
    passwordInput: "123"
  };

  /*componentDidMount() {
    console.log("[LoginForm] componentDidMount // props:", this.props);
  }*/

  emailInputChangeHandler = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  passwordInputChangeHandler = (event) => {
    this.setState({ passwordInput: event.target.value });
  };

  handleLoginClick = () => {
    axios.post("http://172.22.13.38:1323/users/login", {
      email: this.state.emailInput,
      password: this.state.passwordInput
    })
      .then(response => {
        localStorage.setItem("userID", response.data.id);
        this.props.history.push("/recipes");
      })
      .catch(error => {
        console.log("login error:", error);
      });
  };

  render() {
    const { emailInput, passwordInput } = this.state;

    return (
      <div>
        <h3>Login</h3>
        <div>
          <div>Email</div>
          <input value={emailInput} onChange={this.emailInputChangeHandler}/>
        </div>
        <div>
          <div>Password</div>
          <input type="password" value={passwordInput} onChange={this.passwordInputChangeHandler}/>
        </div>
        <button onClick={this.handleLoginClick}>Login</button>
      </div>
    );
  }
}

export default LoginForm;