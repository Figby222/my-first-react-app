/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Count from './Count.jsx';
import Todo from './Todo.jsx';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleChangeTodo = this.handleChangeTodo.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleRemoveTodo(index) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.slice(0, index).concat(state.todos.slice(index + 1))
    }))
  }

  handleChangeTodo(index, value) {
    const newTodos = [ ...this.state.todos ];
    newTodos[index] = value;
    this.setState((state) => ({
      ...state,
      todos: newTodos
    }))
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count 
          todos={this.state.todos}
        />
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo 
              key={todo} 
              textContent={todo} 
              index={index}
              handleRemoveTodo={this.handleRemoveTodo}
              handleChangeTodo={this.handleChangeTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
