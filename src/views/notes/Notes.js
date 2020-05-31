import React from "react";
import Logo from "../../components/Logo/Logo";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";
import Button from "./../../components/Button/Button";
import ListItemWrapper from "../../components/ListItems/Wrapper/ListItemWrapper";

const Notes = () => {
    return (
        <>
            <Logo />
            <Navigation />
            <Title>Notes</Title>
            <Button secondary></Button>
            <ListItemWrapper />
        </>
    );
};

export default Notes;
