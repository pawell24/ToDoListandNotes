import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./views/start/start";
import ToDoList from "./views/todolist/todolist";
import Notes from "./views/notes/Notes";
import Form from "./components/Form/Form";
import MyContext from "./context.js";

class Root extends Component {
    state = {
        isFormOpen: false,
        notes: [],
        todo: [],
    };
    openForm = () => {
        this.setState({
            isFormOpen: true,
        });
    };
    closeForm = () => {
        this.setState({
            isFormOpen: false,
        });
    };
    addItem = (e, newItem) => {
        e.preventDefault();

        this.setState((prevState) => ({
            [newItem.type]: [...prevState[newItem.type], newItem],
        }));
        this.closeForm();
    };

    render() {
        const context = {
            isFormOpen: this.state.isFormOpen,
            openForm: this.openForm,
            closeForm: this.closeForm,
            addItem: this.addItem,
            notes: this.state.notes,
            todo: this.state.todo,
        };
        return (
            <MyContext.Provider value={context}>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/notes" component={Notes} />
                        <Route path="/todolist" component={ToDoList} />
                    </Switch>
                    {this.state.isFormOpen && <Form />}
                </Router>
            </MyContext.Provider>
        );
    }
}

export default Root;
