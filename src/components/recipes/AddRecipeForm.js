import React, { PureComponent } from "react";
import styles from "./AddRecipeForm.module.css";

class AddRecipeForm extends PureComponent {

  state = {
    editing: false,
    nameInput: "",
    ingredientsInput: "",
    instructionsInput: ""
  };

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