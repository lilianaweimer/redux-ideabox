import React, { Component } from 'react';
import AddTodoForm from './AddTodoForm';
import Todos from '../containers/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;
