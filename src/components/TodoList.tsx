import * as React from 'react';
// import { RouteProps } from 'react-router';
import { ITodoItem } from '../store/Todo/types';
import TodoItem from './TodoItem';


export interface ITodoListProps { // actually passed from the connect
  todos: ITodoItem[];
  fetchTodos: () => () => Promise<void>;
  toggleTodo: (id: number | string) => () => Promise<void>;
  deleteTodo: (id: number | string) => () => Promise<void>;
}

export interface ITodoListPropsNative {
  filter?: string;
}
export type TodoListProps = ITodoListProps & ITodoListPropsNative;
class TodoList extends React.Component<TodoListProps, {}> {
  constructor(props: TodoListProps) {
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
              {...todo}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
