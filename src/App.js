import React, {Component} from 'react';
import styles from "./App.module.css";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";
import RecipesWidget from "./components/recipes/RecipesWidget";
import TodoWidget from "./components/todo/TodoWidget";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PrivateRoute from "./routing/PrivateRoute";
import RecipeDetails from "./components/recipes/RecipeDetails";


class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <div className={styles.app}>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route exact path="/" render={() => <Redirect to="/recipes" />} />
          <PrivateRoute path="/recipes" exact component={RecipesWidget} />
          <PrivateRoute path="/recipes/:id" component={RecipeDetails} />
          <PrivateRoute path="/todo" component={TodoWidget} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;