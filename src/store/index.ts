import { combineReducers, Reducer } from 'redux';
import message from './Message/reducer';
import { MessageState } from './Message/types';
import todo from './Todo/reducer';
import { TodoState } from './Todo/types';


// tslint:disable-next-line:interface-name
export interface AppState {
  todo: TodoState;
  message: MessageState;
}

export const reducer: Reducer<AppState> = combineReducers<AppState>({
  message,
  todo
});