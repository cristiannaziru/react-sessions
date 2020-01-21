import React, {Component} from 'react';
import styles from "./App.module.css";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";
import RecipesWidget from "./components/recipes/RecipesWidget";
import {BrowserRouter, Route, NavLink} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>

          <div className={styles.navigation}>
            <NavLink exact to="/">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
          </div>

          <Route path="/" exact component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/recipes" component={RecipesWidget} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;