/*
mock JSON API:

[
  {
    id
    date
    time
    text
    completed
  }
]

*/
import React, { Component } from 'react';

let todoID = 0;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  addTodo() {
    this.setState(prevState => [
      ...prevState,
      {
        id: todoID++,
        text: this.refs.input.value,
        completed: false
      }
    ]);
    console.log('The state is', this.state);
    console.log('The next todo ID is', todoID);
  }
  render() {
    return (
      <div>
        <h2>These are your tasks for {new Date().toLocaleDateString("en-us", {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}</h2>
        <ul>
          {this.state.todos.map(todo =>
            <li key={todo.id}>
              {todo.text}
            </li>
          )}
        </ul>
        <div>
          <input
            ref={node => {
              this.input = node
            }}
            type="text"/>
          <button type="button"
            onClick={() => {
              this.addTodo.bind(this);
              this.input.value = '';
            }}
            >
            Add task
          </button>
        </div>
      </div>
    );
  }
};
