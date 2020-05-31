import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
const Navigation = () => {
    return (
        <ul className={styles.wrapper}>
            <li>
                <NavLink activeClassName={styles.active} to="/todolist">
                    ToDoList
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName={styles.active} to="/notes">
                    Notes
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
