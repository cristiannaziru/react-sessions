import React, { Component } from "react";
import "./Person.css";

class Person extends Component {

  state = {
    inputShowing: false
  };

  editNameHandler = () => {
    this.setState({inputShowing: !this.state.inputShowing});
  };

  okBtnHandler = () => {
    this.setState({inputShowing: !this.state.inputShowing});
  };

    render() {

      const { onNameClick, name, age, onNameInputChage } = this.props;
      const { inputShowing } = this.state;

      return (
        <div className="Person">
          <p>Hello, I'm <span onClick={onNameClick}>{name}</span> and I'm {age} years old.</p>
          {!inputShowing && <button onClick={this.editNameHandler}>Edit Name</button>}
          { inputShowing &&
          <div>
            <input value={name} onChange={onNameInputChage}/>
            <button onClick={this.okBtnHandler}>OK</button>
          </div>
          }
        </div>
      )
    }
};

export default Person;