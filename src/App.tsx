import * as React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Message from './containers/Message.container';
import TodoForm from './containers/TodoForm.container';
import TodoList from './containers/TodoList.container';

const renderTodo = ({match}: RouteComponentProps<{filter: string}>): React.ReactNode => (
  <TodoList filter={match.params.filter} />
);
class App extends React.Component {
  
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {<h1 className="App-title">Welcome to React with Redux and Typescript</h1>}
        </header>
        <Router>
          <div className="todo-app">
            <Message />
            <TodoForm />
            <Route path="/:filter?" render={renderTodo}/>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
