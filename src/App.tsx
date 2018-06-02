import * as React from 'react';
import './App.css';
import Message from './containers/Message.container';
import TodoForm from './containers/TodoForm.container';
import TodoList from './containers/TodoList.container';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1 className="App-title">Welcome to React with Redux and Typescript</h1> */}
        </header>
        <div className="todo-app">
          <Message />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
