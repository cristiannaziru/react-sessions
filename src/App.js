import React, {Component} from 'react';
import './App.css';
import Person from "./components/Person";


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


    /*if (!!title) {
      console.log("title:", title);
    }

    !!title && console.log("title:", title);

    if (!!title) {
      console.log("title:", title);
    }
    else {
      console.log("no title");
    }

    !!title ? console.log("title:", title) : console.log("no title");*/

    const titleColor = title.length < 5 ? "green" : "red";


    const titleStyling = {
      color: titleColor,
      fontWeight: "bold"
    };

    if (!!title) {
      titleStyling.color = "orange";
    }

    const titleClass = "title";

    return (
      <div className="App">
        { !!title && <h1 className={titleClass}>{title}</h1> }

        <input value={inputText} onChange={this.inputChangeHandler}/>
        <p>{inputText}</p>


        <button onClick={this.addPersonHandler}>Add Person</button>
        {
          persons.map(person =>
              <Person key={person.id}
                      name={person.name}
                      age={person.age}
                      onNameClick={this.nameClickHandler.bind(this, person.name)}
                      onNameInputChage={(event) => this.nameInputChangeHandler(event, person.id)}>
                <p>{person.info}</p>
              </Person>
            )
        }
      </div>
    );
  }
}

export default App;