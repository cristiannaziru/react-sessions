import React, {Component} from 'react';
import styles from "./App.module.css";
import RegisterForm from "./components/register/RegisterForm";
import LoginForm from "./components/login/LoginForm";
import RecipesWidget from "./components/recipes/RecipesWidget";
import TodoWidget from "./components/todo/TodoWidget";
import {BrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from "./routing/PrivateRoute";
import Nav from "./components/nav/Nav";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Route path="/" component={Nav}/>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <PrivateRoute path="/recipes" component={RecipesWidget} />
          <PrivateRoute path="/todo" component={TodoWidget} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;