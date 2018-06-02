import { Reducer } from 'redux';
import { TodoAction, TodoConsts} from '../Todo/types';
import { MessageAction, MessageConsts, MessageState } from './types';


const reducer: Reducer<MessageState> = (state: MessageState = 'hello', action: MessageAction | TodoAction) => {
  switch(action.type) {
    case MessageConsts.MESSAGE_SHOW:
      return action.payload;
    case TodoConsts.TODO_ADD:
    case TodoConsts.TODOS_LOAD:
    case TodoConsts.TODO_REPLACE:
    case TodoConsts.TODO_REMOVED:
      return '';
    default:
      return state;
  }
}

export default reducer;