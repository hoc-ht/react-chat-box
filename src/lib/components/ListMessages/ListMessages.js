import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage';
import './ListMessages.scss';

const ListMessages = React.memo(function ListMessages({messages}) {
  const anchorEl = React.useRef(null);

  React.useEffect(() => {
    const newMessage = messages.find(item => item.isNew);
    if (!!newMessage) {
      anchorEl.current.scrollIntoView();
    }
  }, [messages]);

  return (
    <div className="list-messages">
      {
        !!messages?.length &&
        messages.map((item, index) => (
          <ChatMessage message={item} key={index}/>
        ))
      }
      <div className="--anchor" ref={anchorEl}/>
    </div>
  );
});

export default ListMessages;
