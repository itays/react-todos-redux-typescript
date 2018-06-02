import * as React from 'react';
import { ITodoItem } from '../store/Todo/types';
import TodoItem from './TodoItem';

interface ITodoListProps {
  todos: ITodoItem[];
  fetchTodos: () => () => Promise<void>;
  toggleTodo: (id: number | string) => () => Promise<void>;
}

class TodoList extends React.Component<ITodoListProps, {}> {
  constructor(props: ITodoListProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.fetchTodos();
  }
  public render() {
    return (
      <div className="todo-list">
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              toggleTodo={this.props.toggleTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
