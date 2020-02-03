import React from "react";
import styles from "./Recipe.module.css";

const recipe = (props) => {
  const { recipe, onDeleteRecipe, onRecipeClick } = props;

  return (
    <div className={styles.recipe} onClick={onRecipeClick}>
      <h3>{recipe.title}</h3>
      <button onClick={() => onDeleteRecipe(recipe.id)}>Delete Recipe</button>
    </div>
  )
};

export default recipe;

