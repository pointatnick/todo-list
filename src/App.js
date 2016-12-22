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
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
  }
  addTask(name, date) {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          id: 0,
          name: name,
          date: date,
          time: 'a time',
          completed: false
        }
      ]
    }))
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
          {this.state.tasks.map(task =>
            <li key={task.id}>
              {task.name} - {task.time}
            </li>
          )}
        </ul>
        <div>
          <input
            ref={node => {
              this.inputName = node
            }}
            type="text"
            placeholder="Name"
          />
          <input
            ref={node => {
              this.inputDate = node
            }}
            type="datetime-local"
          />
          <button
            type="button"
            onClick={() => {
              this.addTask(this.inputName.value, this.inputDate.value);
              //this.inputName.value='';
              //this.inputDate.value='';
              this.inputName.focus();
            }}>
            Add task
          </button>
        </div>
      </div>
    );
  }
};

/*
this.setState(prevState => [
  ...prevState,
  {
    id: 0,
    date: date,
    time: date,
    name: name,
    completed: false
  }
]);
*/
