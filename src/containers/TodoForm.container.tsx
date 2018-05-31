import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { AppState } from '../store';
import { saveTodo, updateCurrent } from '../store/Todo/actions';

const mapStateToProps = (state: AppState) => ({
    currentTodo: state.todo.currentTodo
});

export default connect(mapStateToProps, { updateCurrent, saveTodo })(TodoForm);