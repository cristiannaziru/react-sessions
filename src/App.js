import React, {Component} from 'react';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import AddRecipeForm from "./components/AddRecipeForm";
import styles from "./App.module.css";


class App extends Component {

  /*state = {
    title: "Delicious and Quick Smoothie Recipes",
    description: "Find the perfect smoothie ideas for every occasion.",
    recipes: [
      {
        id: "1",
        name: "Green Energy Smoothie",
        ingredients: ["1 apple", "1 cup baby spinach", "1/2 squeezed lime", "1/2 avocado", "1/2 banana", "1 cup water"],
        instructions: "Add all the ingredients to the blender. Blend until smooth. Serve in chilled glass or mug and enjoy!"
      },
      {
        id: "2",
        name: "Orange Dream Smoothie",
        ingredients: ["1 peeled orange", "1/4 cup milk", "1/4 teaspoon vanilla extract", "a couple of ice cubes"],
        instructions: "Throw all the ingredients into the blender and process until smooth."
      }
    ]
  };*/

  constructor(props) {
    super(props);

    this.state = {
      title: "Delicious and Quick Smoothie Recipes",
      description: "Find the perfect smoothie ideas for every occasion.",
      recipes: [
        {
          id: "1",
          name: "Green Energy Smoothie",
          ingredients: ["1 apple", "1 cup baby spinach", "1/2 squeezed lime", "1/2 avocado", "1/2 banana", "1 cup water"],
          instructions: "Add all the ingredients to the blender. Blend until smooth. Serve in chilled glass or mug and enjoy!"
        },
        {
          id: "2",
          name: "Orange Dream Smoothie",
          ingredients: ["1 peeled orange", "1/4 cup milk", "1/4 teaspoon vanilla extract", "a couple of ice cubes"],
          instructions: "Throw all the ingredients into the blender and process until smooth."
        }
      ]
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App] getDerivedStateFromProps");
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App] getSnapshotBeforeUpdate");
  }

  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("[App] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[App] componentWillUnmount");
  }

  saveRecipeHandler = (name, ingredients, instructions) => {
    const updatedRecipes = [...this.state.recipes];
    updatedRecipes.push({
      id: Math.random(),
      name,
      ingredients,
      instructions
    });

    this.setState({recipes: updatedRecipes});
  };

  deleteRecipeHandler = (recipeId) => {
    const recipes = [...this.state.recipes];
    const recipeIndex = recipes.findIndex(recipe => recipe.id === recipeId);

    if (recipeIndex > -1) {
      recipes.splice(recipeIndex, 1);
      this.setState({recipes});
    }
  };

  render() {
    const {recipes, title, description} = this.state;

    console.log("[App] render");

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