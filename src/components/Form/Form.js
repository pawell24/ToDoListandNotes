import React, { Component } from "react";
import styles from "./Form.module.scss";
import MyContext from "../../context";
import Radio from "./FormRadio";
const types = {
    todo: "todo",
    notes: "notes",
};
class Form extends Component {
    state = {
        type: types.todo,
        title: "",
        description: "",
        date: "",
    };
    handleRadioButtonChange = (type) => {
        this.setState({
            type: type,
        });
    };
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        const { type } = this.state;
        return (
            <MyContext.Consumer>
                {(context) => (
                    <div className={styles.modal}>
                        <button onClick={context.closeForm}>X</button>
                        <h1>Dodaj dane</h1>
                        <form
                            className={styles.form}
                            onSubmit={(e) => context.addItem(e, this.state)}
                        >
                            <div className={styles.radio}>
                                <Radio
                                    id={types.todo}
                                    checked={type === types.todo}
                                    changeFn={() =>
                                        this.handleRadioButtonChange(types.todo)
                                    }
                                >
                                    ToDoList
                                </Radio>
                                <Radio
                                    id={types.notes}
                                    checked={type === types.notes}
                                    changeFn={() =>
                                        this.handleRadioButtonChange(
                                            types.notes
                                        )
                                    }
                                >
                                    Notes
                                </Radio>
                            </div>
                            <div className={styles.container}>
                                <input
                                    type="text"
                                    name="title"
                                    className={styles.input}
                                    placeholder=" "
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="title" className={styles.label}>
                                    Tytuł
                                </label>
                            </div>
                            <div className={styles.container}>
                                <textarea
                                    name="description"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className={styles.textarea}
                                    placeholder=" "
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                ></textarea>
                                <label
                                    className={styles.label}
                                    htmlFor="description"
                                >
                                    Opis
                                </label>
                            </div>
                            {type !== types.todo ? null : (
                                <div className={styles.container}>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        name="date"
                                        placeholder=" "
                                        value={this.state.date}
                                        onChange={this.handleInputChange}
                                    />
                                    <label
                                        htmlFor="date"
                                        className={styles.label}
                                    >
                                        Data
                                    </label>
                                </div>
                            )}
                            <button className={styles.submit} type="submit">
                                Dodaj zadanie
                            </button>
                        </form>
                    </div>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Form;
