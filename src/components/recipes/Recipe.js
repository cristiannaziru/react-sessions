import React from "react";
import styles from "./Recipe.module.css";

const recipe = (props) => {
  const { recipe, onDeleteRecipe } = props;

  return (
    <div className={styles.recipe}>
      <h3>{recipe.name}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map(ingredient => <li key={`${recipe.id}${ingredient}`}>{ingredient}</li>)}
      </ul>
      <h4>Instructions</h4>
      <p>{recipe.instructions}</p>
      <button onClick={() => onDeleteRecipe(recipe.id)}>Delete Recipe</button>
    </div>
  )
};

export default recipe;

