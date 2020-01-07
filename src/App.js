import React, {Component} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import AddRecipeForm from "./components/AddRecipeForm";
import styles from "./App.module.css";
import axios from 'axios';


class App extends Component {

  state = {
    title: "Delicious and Quick Smoothie Recipes",
    description: "Find the perfect smoothie ideas for every occasion.",
    recipes: []
  };

  componentDidMount() {
    console.log("[App] componentDidMount");
    axios.get("http://172.22.13.38:1323/recipes/5d6e10e384d3303da1547267")
      .then(response => {
        console.log("response:", response);
        this.setState({ recipes: response.data });
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  saveRecipeHandler = (name, ingredients, instructions) => {
    axios.post("http://172.22.13.38:1323/recipes/5d6e10e384d3303da1547267", {
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

  render() {
    const {recipes, title, description} = this.state;

    return (
      <div className={styles.app}>
        <Header title={title}
                description={description}/>
        <Recipes recipes={recipes}
                 onDeleteRecipe={this.deleteRecipeHandler}/>
        <AddRecipeForm onSaveRecipe={this.saveRecipeHandler}/>
      </div>
    );
  }
}

export default App;