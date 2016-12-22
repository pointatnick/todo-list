/*
mock JSON API:

[
  {
    id
    date
    time
    name
    completed
  }
]

App
  Tasks
    TaskRow
  AddTask

*/
import React, { Component } from 'react';

let taskID = 0;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
  }
  addTask(name, datetime) {
    console.log(datetime)
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          id: taskID++,
          name: name,
          date: datetime,
          time: new Date(datetime).toLocaleTimeString('en-us', {
            timeZone: 'UTC',
            hour: 'numeric',
            minute: 'numeric'
          }),
          completed: false
        }
      ]
    }))
  }
  render() {
    return (
      <div>
        <h2>Your tasks for {new Date().toLocaleDateString('en-us', {
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
          <br />
          <input
            ref={node => {
              this.inputDatetime = node
            }}
            type="datetime-local"
          />
          <br />
          <button
            type="button"
            onClick={() => {
              this.addTask(
                this.inputName.value,
                this.inputDatetime.value
              );
              this.inputName.value='';
              this.inputDatetime.value='';
              this.inputName.focus();
            }}>
            Add task
          </button>
        </div>
      </div>
    );
  }
};
