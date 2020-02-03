import React, {Component} from "react";
import axios from "axios";
import Header from "./Header";
import RecipeList from "./RecipeList";
import AddRecipeForm from "./AddRecipeForm";


class RecipesWidget extends Component {

  state = {
    title: "Delicious and Quick Smoothie Recipes",
    description: "Find the perfect smoothie ideas for every occasion.",
    recipes: []
  };

  componentDidMount() {
    const userID = localStorage.getItem("userID");
    axios
      .get(`http://172.22.13.38:1323/recipes/${userID}`)
      .then(response => {
        console.log("response:", response);
        this.setState({ recipes: response.data });
      })
      .catch(error => {
        console.log("login error:", error);
      });
  }

  saveRecipeHandler = (name, ingredients, instructions) => {
    const userID = localStorage.getItem("userID");
    axios.post(`http://172.22.13.38:1323/recipes/${userID}`, {
      title: name,
      ingredients,
      instructions
    })
      .then(response => {
        const recipes = [...this.state.recipes, response.data];
        this.setState({ recipes });
      });
  };

  deleteRecipeHandler = (recipeId) => {
    axios.delete(`http://172.22.13.38:1323/recipes/${recipeId}`)
      .then(response => {
        const recipes = [...this.state.recipes];
        const filteredReciped = recipes.filter(recipe => recipe.id !== recipeId);
        this.setState({ recipes: filteredReciped });
      });
  };

  recipeClickHandler = (id) => {
    this.props.history.push(`/app/recipes/${id}`);
  };

  render() {
    const {recipes, title, description} = this.state;

    return (
      <>
        <Header title={title}
                description={description}/>
        <RecipeList recipes={recipes}
                    onRecipeClick={ this.recipeClickHandler }
                    onDeleteRecipe={this.deleteRecipeHandler}/>
        <AddRecipeForm onSaveRecipe={this.saveRecipeHandler}/>
      </>
    );
  }
}

export default RecipesWidget;