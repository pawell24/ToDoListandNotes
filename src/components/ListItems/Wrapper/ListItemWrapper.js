import React from "react";
import MyContext from "../../../context";
import ListItem from "./../ListItem/ListItem";
import styles from "./ListItemWrapper.module.scss";

const ListItemWrapper = ({ secondary }) => (
    <MyContext.Consumer>
        {(context) => (
            <ul className={styles.itemsWrapper}>
                {secondary
                    ? context.todo.map((item) => (
                          <ListItem secondary {...item} />
                      ))
                    : context.notes.map((item) => <ListItem {...item} />)}
            </ul>
        )}
    </MyContext.Consumer>
);

export default ListItemWrapper;
