import React from "react";
import styles from "./start.module.scss";
import { Link } from "react-router-dom";

const Start = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>
                    Witaj, w aplikacji ToDoList&Notes
                </h1>
                <Link to="/todolist">Przejdź do aplikacji</Link>
            </div>
        </>
    );
};

export default Start;
