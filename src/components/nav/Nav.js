import React, {Component} from "react";
import styles from "./Nav.module.css";
import {NavLink} from "react-router-dom";

class Nav extends Component {

    handleLogoutClick = () => {
        localStorage.removeItem("userID");
        this.props.history.push("/login");
    };

    render() {
        return (
            <div className={styles.navigation}>
                <NavLink to="/app/recipes" activeClassName={styles.active}>Recipes</NavLink>
                <NavLink to="/app/todo" activeClassName={styles.active}>Todo</NavLink>
                <button onClick={this.handleLogoutClick}>Logout</button>
            </div>
        );
    }
}

export default Nav;