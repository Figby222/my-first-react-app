import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false,
            inputVal: ""
        }

        this.handleSetEditing = this.handleSetEditing.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitTodoChange = this.handleSubmitTodoChange.bind(this);
    }

    handleSetEditing(e) {
        e.preventDefault();
        this.setState((state) => ({
            ...state,
            editing: true
        }))
    }

    handleInputChange(e) {
        e.preventDefault();
        this.setState((state) => ({
            ...state,
            inputVal: e.target.value
        }))
    }

    handleSubmitTodoChange(e) {
        e.preventDefault();
        this.props.handleChangeTodo(this.props.index, this.state.inputVal);
        this.setState((state) => ({
            ...state,
            inputVal: ""
        }))
    }

    render() {

        if (this.state.editing) {
            return (
                <li>
                    <button type="button" onClick={this.props.handleRemoveTodo}>Delete</button>
                    <input 
                        type="text" 
                        id={`todo-${this.props.index}`} 
                        name={`todo-${this.props.index}`}
                        value={this.state.inputVal}
                        onChange={this.handleInputChange}
                    />
                    <button type="button" 
                        onClick={this.handleSubmitTodoChange}>
                            Submit
                    </button>
                </li>
            )
        }
        return (
            <li>
                <button type="button" 
                    onClick={() => this.props.handleRemoveTodo(this.props.index)}>
                        Delete
                </button>
                {this.props.textContent}
                <button type="button" onClick={this.handleSetEditing}>Edit</button>
            </li>
        )
    }
}

export default Todo;