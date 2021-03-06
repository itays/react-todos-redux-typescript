import { Dispatch } from 'react-redux';
import { ActionCreator } from 'redux';
import { AppState } from '..';
import { createTodo, destroyTodo, getTodos, updateTodo } from '../../services/todoService';
import { showMessage } from '../Message/actions';
import { MessageAction } from '../Message/types';
import {
  ITodoItem,
  ReplaceTodoAction,
  TodoAction,
  TodoAddedAction,
  TodoConsts,
  TodoRemovedAction,
  TodosLoadAction,
  UpdateCurrentAction
} from './types';

export const loadTodos: ActionCreator<TodosLoadAction> = (
  todos: ITodoItem[]
) => ({
  payload: todos,
  type: TodoConsts.TODOS_LOAD
});

export const addTodo: ActionCreator<TodoAddedAction> = (todo: ITodoItem) => ({
  payload: todo,
  type: TodoConsts.TODO_ADD
});

export const updateCurrent: ActionCreator<UpdateCurrentAction> = (
  val: string
) => ({
  payload: val,
  type: TodoConsts.CURRENT_UPDATE
});

export const replaceTodo: ActionCreator<ReplaceTodoAction> = (
  todo: ITodoItem
) => ({
  payload: todo,
  type: TodoConsts.TODO_REPLACE
});

export const removeTodo: ActionCreator<TodoRemovedAction> = (
  id: string | number
) => ({
  payload: id,
  type: TodoConsts.TODO_REMOVED
});

export const fetchTodos = () => async (dispatch: Dispatch<TodoAction | MessageAction>) => {
  try {
    dispatch(showMessage('Loading todos'));
    const todos = await getTodos();
    dispatch(loadTodos(todos));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

export const saveTodo = (name: string) => async (
  dispatch: Dispatch<TodoAction | MessageAction>
) => {
  try {
    dispatch(showMessage('saving todo'));
    const todo: ITodoItem = await createTodo(name);
    dispatch(addTodo(todo));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

export const toggleTodo = (id: number | string) => async (
  dispatch: Dispatch<TodoAction | MessageAction>,
  getState: () => AppState
) => {
  try {
    dispatch(showMessage('Saving a todo'));
    const { todos } = getState().todo;
    const todo = todos.find(t => t.id === id);
    if (!todo) {
      return;
    }
    const toggled = { ...todo, isComplete: !todo.isComplete };
    const toggledTodo: ITodoItem = await updateTodo(toggled);
    dispatch(replaceTodo(toggledTodo));
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
};

export const deleteTodo = (id: number | string) => async (dispatch: Dispatch<TodoAction | MessageAction>) => {
  dispatch(showMessage('Removing todo'));
  try {
    await destroyTodo(id);
    dispatch(removeTodo(id))
  } catch (error) {
    // tslint:disable-next-line:no-console
    console.log(error);
  }
  
};

// Selector function
export const getVisibleTodos = (todos: ITodoItem[], filter: string | undefined): ITodoItem[] => {
  switch(filter) {
    case 'active':
      return todos.filter(t => !t.isComplete);
    case 'completed':
      return todos.filter(t => t.isComplete)
    default:
      return todos;
  }
}
