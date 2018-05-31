import { Dispatch } from 'react-redux';
import { ActionCreator } from 'redux';
import { createTodo, getTodos } from '../../services/todoService';
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

export const fetchTodos = () => async (dispatch: Dispatch<TodosLoadAction>) => {
  try {
    // dispatch(showMessage('Loading todos'));
    const todos = await getTodos();
    dispatch(loadTodos(todos));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
}

export const saveTodo = (name: string) => async (dispatch: Dispatch<TodoAddedAction>) => {
  try {
    // dispatch(showMessage('saving todo'));
    const todo: TodoItem = await createTodo(name);
    dispatch(addTodo(todo));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
}
