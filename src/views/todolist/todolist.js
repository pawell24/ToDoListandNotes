import React from "react";
import Title from "./../../components/Title/Title";
import Logo from "./../../components/Logo/Logo";
import Button from "../../components/Button/Button";
import Navigation from "./../../components/Navigation/Navigation";
import ListItemWrapper from "../../components/ListItems/Wrapper/ListItemWrapper";

const ToDoList = () => {
    return (
        <>
            <Title>ToDoList</Title>
            <Logo />
            <Button />
            <Navigation />
            <ListItemWrapper secondary />
        </>
    );
};

export default ToDoList;
