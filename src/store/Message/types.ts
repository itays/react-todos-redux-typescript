import { Action } from 'redux';
export enum MessageConsts {
  MESSAGE_SHOW = '@@message/MESSAGE_SHOW'
}

export type MessageState = string | undefined;

// tslint:disable-next-line:interface-name
export interface ShowMessageAction extends Action {
  type: MessageConsts.MESSAGE_SHOW;
  payload: string;
}

export type MessageAction = ShowMessageAction;