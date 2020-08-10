import React from 'react';
import './ChatBox.scss';
import SendIcon from '../icons/SendIcon';
import ChatMessage from '../ChatMessage/ChatMessage';

const ChatBox = React.memo(function ChatWidget({conversationId, title, messages, handleSendMessage}) {
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
    <div className="hchat-box">
      <div className="hchat-box-header">
        <div className="--title">Chat box</div>
      </div>
      <div className="hchat-box-content">
        {
          !!messages?.length &&
          messages.map((item, index) => (
            <ChatMessage message={item} key={index}/>
          ))
        }
      </div>
      <div className="hchat-box-footer">
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
