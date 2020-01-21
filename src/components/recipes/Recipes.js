import Recipe from "./Recipe";
import React from "react";
import styles from "./Recipes.module.css";

const recipes = (props) => {
  const {recipes, onDeleteRecipe} = props;

  return (
    <div className={styles.recipes}>
      {
        recipes.length > 0
        ? recipes.map(recipe =>
          <Recipe key={recipe.id}
                  recipe={recipe}
                  onDeleteRecipe={onDeleteRecipe}>
          </Recipe>)
        : <p>There are no recipes at this time. Please use the button below to add them.</p>
      }
    </div>
  );
};

export default recipes;