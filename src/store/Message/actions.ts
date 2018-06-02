import { ActionCreator } from 'redux';
import { MessageConsts, ShowMessageAction } from './types';

export const showMessage: ActionCreator<ShowMessageAction> = (msg: string) => ({type: MessageConsts.MESSAGE_SHOW, payload: msg});
