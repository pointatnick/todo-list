import React, { Component } from 'react';
//import './App.css';

let taskID = 0;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    }
  }
  addTask(name, time, ampm) {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          id: taskID++,
          name: name,
          time: time + ' ' + ampm,
          completed: false
        }
      ]
    }))
  }
  toggleTask(id) {
    console.log('Toggling task', id,'...')
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    }))
  }
  render() {
    return (
      <div className="app">
        <div className="todo-list">
          <h2>{new Date().toLocaleDateString('en-us', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </h2>
          <ul>
            {this.state.tasks.map(task =>
              <li
                key={task.id}
                style={{
                  textDecoration:
                    task.completed ? 'line-through' : 'none'
                }}
                onClick={() => this.toggleTask(task.id)}
                >
                {task.name} - {task.time}
              </li>
            )}
          </ul>
        </div>
        <div className="add-new-task">
          <h4>Add New Task</h4>
          <input
            ref={node => {
              this.name = node
            }}
            type="text"
            placeholder="Name"
          />
          <select ref={node => this.time = node}>
            <option>1:00</option>
            <option>2:00</option>
            <option>3:00</option>
            <option>4:00</option>
            <option>5:00</option>
            <option>6:00</option>
            <option>7:00</option>
            <option>8:00</option>
            <option>9:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
          </select>
          <select ref={node => this.ampm = node}>
            <option>AM</option>
            <option>PM</option>
          </select>
          <button
            type="button"
            onClick={() => {
              this.addTask(
                this.name.value,
                this.time.value,
                this.ampm.value
              );
              this.name.value='';
              this.name.focus();
            }}>
            Add task
          </button>
        </div>
      </div>
    );
  }
};
