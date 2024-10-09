import React, { useState, useEffect } from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const ChatComponentSlide = () => {
  return (
    <div>
      <h2>Chat Component with Socket.IO: `ChatComponent.js`</h2>
      <p>
        The <code>ChatComponent.js</code> file demonstrates how to use the socket connection inside a React component to handle real-time chat functionality.
      </p>
      <CodeBlockComponent code={`import React, { useState, useEffect } from 'react';
import { useSocket } from './SocketContext';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const socket = useSocket();

  useEffect(() => {
    socket.on('newMessage', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('newMessage');
    };
  }, [socket]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendMessage', input);
      setInput('');
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}>{msg}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;`} />

      <p>
        This component listens for the <code>newMessage</code> event from the server and updates the local state with incoming messages. It also allows the user to send messages by emitting the <code>sendMessage</code> event to the server.
      </p>
    </div>
  );
};

export default ChatComponentSlide;
