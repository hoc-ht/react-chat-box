import React from 'react';
import './ChatMessage.scss';

const ChatMessage = React.memo(function ChatMessage({message}) {
  return (
    <div className={`react-chat-message ${message.author === 'me' ? '--me' : '--them'}`}>
      <div className="--message-text">
        {message?.data?.text || ''}
      </div>
    </div>
  )
});

export default ChatMessage;
