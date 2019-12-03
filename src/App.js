import React, {Component} from 'react';
import styles from "./App.module.css";
import classNames from "classnames";
import Header from './components/Header';
import Persons from './components/Persons';


class App extends Component {

  state = {
    persons: [
      {id: "p1", name: "Ana", age: 20},
      {id: "p2", name: "Maria", age: 25, info: "My hobbies are reading and hiking."}
    ],
    title: "My React App",
    inputText: "initial text"
  };

  addPersonHandler = () => {
    this.setState({
      persons: [
        ...this.state.persons,
        {name: "Grigore", age: 75, info: "Reaching the end... :'("}
      ]
    });
  };

  nameClickHandler = (name) => {
    console.log("name clicked:", name);
  };

  inputChangeHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  nameInputChangeHandler = (event, id) => {
    const persons = [...this.state.persons];
    const changedPerson = persons.find(person => person.id === id);
    changedPerson.name = event.target.value;

    this.setState({ persons });
  };

  render() {
    const { persons, title, inputText } = this.state;

    if (!persons) {
      throw Error("Persons is undefined");
    }

    return (
      <div className={classNames(styles.App, styles.App2, {[styles.App3]: persons.length < 3})}>
        <Header title={title}
                inputText={inputText}
                onInputChange={this.inputChangeHandler}
                onAddPerson={this.addPersonHandler}/>

        <Persons persons={persons}
                 onNameClick={this.nameClickHandler}
                 onNameInputChage={this.nameInputChangeHandler}/>
      </div>
    );
  }
}

export default App;