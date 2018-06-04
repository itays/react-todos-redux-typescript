import { connect } from 'react-redux';
import TodoList, { ITodoListPropsNative } from '../components/TodoList';
import { AppState } from '../store';
import { deleteTodo, fetchTodos, getVisibleTodos, toggleTodo } from '../store/Todo/actions';
// import { TodosLoadAction } from '../store/Todo/types';

const mapStateToProps = (state: AppState, ownProps: ITodoListPropsNative) => {
    return {
        todos: getVisibleTodos(state.todo.todos, ownProps.filter)
    }
};



export default connect(mapStateToProps, { fetchTodos, toggleTodo, deleteTodo })(TodoList);