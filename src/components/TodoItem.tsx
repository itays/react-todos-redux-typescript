import * as React from 'react';

// tslint:disable-next-line:interface-name
interface TodoItemProps {
  id: number | string;
  name: string;
  isComplete: boolean;
  toggleTodo: (id: string | number) => () => Promise<void>;
}

class TodoItem extends React.Component<TodoItemProps> {
  public render() {
    const {isComplete, name, id, toggleTodo } = this.props;
    // const doDelete = deleteTodo.bind(id);
    return (
    <li data-id={id}>
    <span className="delete-item">
      {/* <button onClick={doDelete}>X</button> */}
    </span>
    <label>
      <input
        type="checkbox"
        checked={isComplete}
        // tslint:disable-next-line:jsx-no-lambda
        onChange={() => toggleTodo(id)}
      />{' '}
      {name}
    </label>
  </li>
    );
  }
}

export default TodoItem;