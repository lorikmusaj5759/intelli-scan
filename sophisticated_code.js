/* sophisticated_code.js */

// This code is a sophisticated implementation of a web-based chat application
// It uses modern JavaScript features and libraries to create an interactive and dynamic user interface

// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';

// Initialize the chat application
class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      inputMessage: '',
      username: '',
    };
  }

  componentDidMount() {
    // Connect to the chat server
    this.socket = io('http://localhost:3000');

    // Receive incoming messages from the server
    this.socket.on('message', (message) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, message],
      }));
    });
  }

  componentWillUnmount() {
    // Disconnect from the chat server
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  handleInputChange = (event) => {
    this.setState({ inputMessage: event.target.value });
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handleSendMessage = () => {
    const { inputMessage, username } = this.state;

    // Send message to the server
    this.socket.emit('message', {
      username,
      message: inputMessage,
    });

    // Clear input message
    this.setState({ inputMessage: '' });
  }

  render() {
    const { messages, inputMessage, username } = this.state;

    return (
      <div>
        <h1>Chat App</h1>
        
        <div>
          <input 
            type="text" 
            value={username}
            onChange={this.handleUsernameChange}
            placeholder="Enter your username"
          />
          <br />
          <textarea 
            value={inputMessage}
            onChange={this.handleInputChange}
            placeholder="Enter your message"
          />
          <br />
          <button onClick={this.handleSendMessage}>Send</button>
        </div>

        <h2>Chat History:</h2>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.username}</strong>: {message.message}
          </div>
        ))}
      </div>
    );
  }
}

// Render the chat application
ReactDOM.render(<ChatApp />, document.getElementById('root'));