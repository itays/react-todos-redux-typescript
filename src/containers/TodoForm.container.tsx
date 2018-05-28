import { connect } from 'react-redux';
// import { connect, Dispatch } from 'react-redux';
import TodoForm from '../components/TodoForm';
import { AppState } from '../store';
import { updateCurrent } from '../store/Todo/actions';
// import { UpdateCurrentAction } from '../store/Todo/types';


const mapStateToProps = (state: AppState) => ({
    currentTodo: state.todo.currentTodo
});

// const mapDispatchToProps = (dispatch: Dispatch<UpdateCurrentAction>) => ({
//     updateCurrent: (val: string) => dispatch(updateCurrent(val))
// });

export default connect(mapStateToProps, { updateCurrent })(TodoForm);