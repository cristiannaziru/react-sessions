import React, {Component} from "react";
import styles from "./Recipe.module.css";
import {withRouter} from 'react-router-dom';

class Recipe extends Component {

  clickHandler = () => {
    this.props.history.push(`/app/recipes/${this.props.recipe.id}`);
  };

  render() {
    const { recipe, onDeleteRecipe } = this.props;

    return (
      <div className={styles.recipe} onClick={ this.clickHandler }>
        <h3>{recipe.title}</h3>
        <button onClick={() => onDeleteRecipe(recipe.id)}>Delete Recipe</button>
      </div>
    )
  }
};

export default withRouter(Recipe);

