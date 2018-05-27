import { ActionCreator } from 'redux';
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
