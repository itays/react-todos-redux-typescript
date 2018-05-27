import { combineReducers, Reducer } from 'redux';
import todoReducer from './Todo/reducer';
import { TodoState } from './Todo/types';


// tslint:disable-next-line:interface-name
export interface AppState {
  todo: TodoState;
}

export const reducer: Reducer<AppState> = combineReducers<AppState>({
  todo: todoReducer
});