import React, { Component, PureComponent } from "react";
import styles from "./AddRecipeForm.module.css";

class AddRecipeForm extends PureComponent {

  state = {
    editing: false,
    nameInput: "",
    ingredientsInput: "",
    instructionsInput: ""
  };

  constructor(props) {
    super(props);
    console.log("[ApAddRecipeFormp] constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[ApAddRecipeFormp] getDerivedStateFromProps");
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[AAddRecipeFormpp] getSnapshotBeforeUpdate");
  }

  componentDidMount() {
    console.log("[AddRecipeForm] componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[AddRecipeForm] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[AddRecipeForm] componentWillUnmount");
  }

  nameInputChangeHandler = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  ingredientsInputChangeHandler = (event) => {
    this.setState({ ingredientsInput: event.target.value });
  };

  instructionsInputChangeHandler = (event) => {
    this.setState({ instructionsInput: event.target.value });
  };

  addRecipeClickHandler = () => this.setState({ editing: true });

  cancelAddRecipeClickHandler = () => this.resetForm();

  saveClickHandler = () => {
    this.props.onSaveRecipe(
      this.state.nameInput,
      this.state.ingredientsInput.split(","),
      this.state.instructionsInput
    );
    this.resetForm();
  };

  resetForm = () => this.setState({
    editing: false,
    nameInput: "",
    ingredientsInput: "",
    instructionsInput: ""
  });

  render() {
    const { editing, nameInput, ingredientsInput, instructionsInput } = this.state;

    console.log("[AddRecipeForm] render");

    return (
      editing
        ? <>
            <div>
              <div className={styles.label}>Name</div>
              <input value={nameInput} onChange={this.nameInputChangeHandler}/>
            </div>
            <div>
              <div className={styles.label}>Ingredients</div>
              <input value={ingredientsInput} onChange={this.ingredientsInputChangeHandler}/>
            </div>
            <div>
              <div className={styles.label}>Instructions</div>
              <textarea value={instructionsInput} onChange={this.instructionsInputChangeHandler}/>
            </div>
            <button onClick={this.cancelAddRecipeClickHandler}>Cancel</button>
            <button onClick={this.saveClickHandler}>Save</button>
          </>
        : <button onClick={this.addRecipeClickHandler}>Add Recipe</button>
    );
  }
}

export default AddRecipeForm;