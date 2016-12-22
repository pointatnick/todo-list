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

App
  Tasks
    TaskRow
  AddTask

*/
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  render() {
    return (
      <div>
        <h2>These are your tasks for {new Date()
          .toLocaleDateString("en-us", {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })}
        </h2>
        <ul>
          {this.state.todos.map(todo =>
            <li key={todo.id}>
              {todo.text} - {todo.time}
            </li>
          )}
        </ul>
        <div>
          <input
            ref={node => {
              this.input = node
            }}
            type="text"/>
          <button
            type="button"
            onClick={() => {
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
