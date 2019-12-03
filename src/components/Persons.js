import Person from "./Person";
import React from "react";

const persons = (props) => (
  props.persons.map(person =>
    <Person key={person.id}
            name={person.name}
            age={person.age}
            onNameClick={event => props.onNameClick(person.name)}
            onNameInputChage={event => props.onNameInputChage(event, person.id)}>
      <p>{person.info}</p>
    </Person>
  )
);

export default persons;