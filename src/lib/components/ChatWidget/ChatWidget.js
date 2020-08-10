import React from 'react';
import './ChatWidget.scss';
import iconMessage from '../../assets/images/icon-message.svg';
import iconClose from '../../assets/images/icon-close.png';
import ChatBox from '../ChatBox/ChatBox';

class ChatWidget extends React.PureComponent {
  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {isOpen} = this.state;
    return (
      <div className={`react-chat-widget ${isOpen ? 'opened' : ''}`}>
        <div className="--bubble" onClick={this.toggleOpen}>
          {
            isOpen && <img src={iconClose} className="img-close" alt="Close"/>
          }
          {
            !isOpen && <img src={iconMessage} className="img-message" alt="Message"/>
          }
        </div>
        <div className="--chat-window">
          {
            isOpen &&
            <ChatBox {...this.props}/>
          }
        </div>
      </div>
    );
  }
}

export default ChatWidget;
