import React from 'react';
import {ChatWidget} from './lib';

class App extends React.PureComponent {
  state = {
    conversations: [{
      id: 1,
      name: 'John',
    }],
    messages: [
      {
        type: 'text',
        author: 'me',
        data: {
          text: 'Why don\'t they have salsa on the table?'
        }
      },
      {
        type: 'text',
        author: 'them',
        data: {
          text: 'What do you need salsa for?'
        }
      },
      {
        type: 'text',
        author: 'me',
        data: {
          text: 'Salsa is now the number one condiment in America.'
        }
      }
    ],
  };

  handleSendMessage = (conversationId, message) => {
    return new Promise((resolve) => {
      this.setState(prevState => ({
        messages: [
          ...prevState.messages,
          {
            type: 'text',
            author: 'me',
            data: {
              text: message,
            }
          }
        ]
      }), () => {
        resolve();
      });
    });
  };

  render() {
    const {conversations, messages} = this.state;
    return (
      <ChatWidget
        conversations={conversations}
        messages={messages}
        handleSendMessage={this.handleSendMessage}
      />
    );
  }
}

export default App;
