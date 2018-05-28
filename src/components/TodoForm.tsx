import * as React from 'react';

// tslint:disable-next-line:interface-name
interface TodoFormProps {
  currentTodo: string;
  updateCurrent: (val: string) => void;
}

class TodoForm extends React.Component<TodoFormProps> {
    constructor(props: TodoFormProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    public handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.props.updateCurrent(e.currentTarget.value);
    }
    public render() {
    const { currentTodo } = this.props;
    return (
      <form>
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
