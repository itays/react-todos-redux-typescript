import * as React from 'react';
import { UpdateCurrentAction } from '../store/Todo/types';

// tslint:disable-next-line:interface-name
interface TodoFormProps {
  currentTodo: string;
  updateCurrent: (val: string) => UpdateCurrentAction;
  saveTodo: (name: string) => () => Promise<void>;
}

class TodoForm extends React.Component<TodoFormProps, {}> {
    constructor(props: TodoFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    public handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.props.updateCurrent(e.currentTarget.value);
    }

    public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      this.props.saveTodo(this.props.currentTodo);
    }
    
    public render() {
      const { currentTodo } = this.props;
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="todo description"
            onChange={this.handleChange}
            value={currentTodo}
          />
        </form>
      );
  }
}

export default TodoForm;
