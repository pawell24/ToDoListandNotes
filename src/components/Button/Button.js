import React from "react";
import styles from "./Button.module.scss";
import MyContext from "../../context";
const Button = ({ secondary }) => {
    return (
        <MyContext.Consumer>
            {(context) => (
                <button className={styles.button} onClick={context.openForm}>
                    {secondary ? "Dodaj notatkę" : "Dodaj zadanie"}
                </button>
            )}
        </MyContext.Consumer>
    );
};

export default Button;
