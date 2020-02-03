import Recipe from "./Recipe";
import React from "react";
import styles from "./RecipeList.module.css";

const recipeList = (props) => {
  const {recipes, onDeleteRecipe, onRecipeClick} = props;

  return (
    <div className={styles.recipes}>
      {
        recipes.length > 0
        ? recipes.map(recipe =>
          <Recipe key={recipe.id}
                  recipe={recipe}
                  onRecipeClick={() => onRecipeClick(recipe.id)}
                  onDeleteRecipe={onDeleteRecipe}>
          </Recipe>)
        : <p>There are no recipes at this time. Please use the button below to add them.</p>
      }
    </div>
  );
};

export default recipeList;