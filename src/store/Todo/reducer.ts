import { Reducer } from 'redux';
import { TodoAction, TodoConsts, TodoState } from './types';

export const initialState: TodoState = {
  currentTodo: '',
  todos: [],
};

const reducer: Reducer<TodoState> = (state: TodoState = initialState, action: TodoAction) => {
  switch(action.type) {
    case TodoConsts.TODOS_LOAD:
      return {...state, todos: action.payload};
    
    case TodoConsts.TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)};

    case TodoConsts.CURRENT_UPDATE:
      return {...state, currentTodo: action.payload};
    
    case TodoConsts.TODO_REPLACE:
      return {...state, todos: state.todos.map(t => t.id === action.payload.id ? action.payload : t)};

    case TodoConsts.TODO_REMOVED:
      return {...state, todos: state.todos.filter(t => t.id !== action.payload)};
    
    default:
      return state;
  }
};

export default reducer;