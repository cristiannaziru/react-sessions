import styles from "./header.module.css";
import React from "react";

const header = (props) => (
  <>
    { !!props.title && <h1 className={styles.title}>{props.title}</h1> }

    <input value={props.inputText} onChange={props.onInputChange}/>
    <p className={styles.inputText}>{props.inputText}</p>

    <button onClick={props.onAddPerson}>Add Person</button>
  </>
);

export default header;