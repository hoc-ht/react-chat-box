import React from 'react';
import './ChatBox.scss';
import SendIcon from '../icons/SendIcon';
import ListMessages from '../ListMessages/ListMessages';

const ChatBox = React.memo(function ChatWidget({conversationId, conversationTitle, messages, handleSendMessage}) {
  const [message, setMessage] = React.useState('');

  const handleKeyDown = event => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      if (message && handleSendMessage) {
        handleSendMessage(conversationId, message).then(() => {
          setMessage('');
        }).catch(() => {

        });
      }
    }
  };

  return (
    <div className="react-chat-box">
      <div className="react-chat-box-header">
        <div className="--title">{conversationTitle}</div>
      </div>
      <div className="react-chat-box-content">
        <ListMessages messages={messages}/>
      </div>
      <div className="react-chat-box-footer">
        <textarea
          value={message}
          placeholder="Write message..."
          onKeyDown={handleKeyDown}
          onChange={e => setMessage(e.target.value)}
        />
        <div className="send-icon">
          <SendIcon active={!!message}/>
        </div>
      </div>
    </div>
  );
});

export default ChatBox;
