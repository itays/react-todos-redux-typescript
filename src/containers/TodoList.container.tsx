import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { AppState } from '../store';
import { fetchTodos } from '../store/Todo/actions';
// import { TodosLoadAction } from '../store/Todo/types';

const mapStateToProps = (state: AppState) => ({
    todos: state.todo.todos
});



export default connect(mapStateToProps, { fetchTodos })(TodoList);