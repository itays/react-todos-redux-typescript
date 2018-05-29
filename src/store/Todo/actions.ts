import { Dispatch } from 'react-redux';
import { ActionCreator } from 'redux';
import { getTodos } from '../../services/todoService';
import { ReplaceTodoAction, TodoAddedAction, TodoConsts, TodoItem, TodoRemovedAction, TodosLoadAction, UpdateCurrentAction } from './types';

export const loadTodos: ActionCreator<TodosLoadAction> = (todos: TodoItem[]) => ({
  payload: todos,
  type: TodoConsts.TODOS_LOAD,
});

export const addTodo: ActionCreator<TodoAddedAction> = (todo: TodoItem) => ({
  payload: todo,
  type: TodoConsts.TODO_ADD,
});

export const updateCurrent: ActionCreator<UpdateCurrentAction> = (val: string) => ({
  payload: val,
  type: TodoConsts.CURRENT_UPDATE,
});

export const replaceTodo: ActionCreator<ReplaceTodoAction> = (todo: TodoItem) => ({
  payload: todo,
  type: TodoConsts.TODO_REPLACE,
});

export const removeTodo: ActionCreator<TodoRemovedAction> = (id: string | number) => ({
  payload: id,
  type: TodoConsts.TODO_REMOVED,
});

// export function fetchTodos(): (dispatch: Dispatch<TodosLoadAction>) => Promise<void> {
//   return async (dispatch) => {
//     try {
//       const todos = await getTodos();
//       dispatch(loadTodos(todos));
//     } catch(e) {
//       // tslint:disable-next-line:no-console
//       console.log(e);
//     }
//   }
// }

export const fetchTodos = () => (dispatch: Dispatch<TodosLoadAction>) => {
  // dispatch(showMessage('Loading todos'));
  getTodos().then(todos => dispatch(loadTodos(todos)));
}
