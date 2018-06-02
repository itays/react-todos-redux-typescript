import * as React from 'react';

interface IMessageProps {
  message: string;
}
const Message = ({message}: IMessageProps) => (message ? <span className="message">{message}</span> : null);

export default Message;