import * as React from 'react';
import { TodoItem } from '../store/Todo/types';

// tslint:disable-next-line:interface-name
interface TodoListProps {
  todos: TodoItem[];
  fetchTodos: () => () => Promise<void>;
}

const TodoItem = ({name}: TodoItem) => (
  <li>
    <span className="delete-item">
      {/* <button onClick={() => deleteTodo(id)}>X</button> */}
    </span>
    <label>
      <input
        type="checkbox"
        // checked={isComplete}
        // onChange={() => toggleTodo(id)}
      />{' '}
      {name}
    </label>
  </li>
);

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
            //   toggleTodo={this.props.toggleTodo}
              {...todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
