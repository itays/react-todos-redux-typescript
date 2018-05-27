import { Action } from 'redux';
export const TODO_ADD: string = '@@todo/TODO_ADD';
export enum TodoConsts {
  TODO_ADD = '@@todo/TODO_ADD',
  TODOS_LOAD = '@@todo/TODOS_LOAD',
  CURRENT_UPDATE = '@@todo/CURRENT_UPDATE',
  TODO_REPLACE = '@@todo/TODO_REPLACE',
  TODO_REMOVED = '@@todo/TODO_REMOVED',
}
// tslint:disable-next-line:interface-name
export interface TodoState {
  todos: TodoItem[];
  currentTodo: string | TodoItem;
}

// tslint:disable-next-line:interface-name
export interface TodoItem {
  id: number | string;
  name: string;
  isComplete: boolean;
}

// tslint:disable-next-line:interface-name
export interface TodoAddedAction extends Action {
  type: TodoConsts.TODO_ADD;
  payload: TodoItem;
}

// tslint:disable-next-line:interface-name
export interface TodosLoadAction extends Action {
  type: TodoConsts.TODOS_LOAD;
  payload: TodoItem[];
}

// tslint:disable-next-line:interface-name
export interface UpdateCurrentAction extends Action {
  type: TodoConsts.CURRENT_UPDATE;
  payload: string;
}

// tslint:disable-next-line:interface-name
export interface ReplaceTodoAction extends Action {
  type: TodoConsts.TODO_REPLACE;
  payload: TodoItem;
}

// tslint:disable-next-line:interface-name
export interface TodoRemovedAction extends Action {
  type: TodoConsts.TODO_REMOVED;
  payload: number | string;
}




export type TodoAction = TodoAddedAction | TodosLoadAction | UpdateCurrentAction | ReplaceTodoAction | TodoRemovedAction;
