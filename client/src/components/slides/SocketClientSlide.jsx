import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const SocketClientSlide = () => {
  return (
    <div>
      <h2>Socket.IO Client: `SocketClient.js`</h2>
      <p>
        The <code>SocketClient.js</code> file is responsible for establishing a connection to the server using Socket.IO on the client-side. It listens for real-time events and sends messages to the server.
      </p>
      <CodeBlockComponent code={`import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const sendMessage = (msg) => {
  socket.emit('sendMessage', msg);
};

socket.on('newMessage', (message) => {
  console.log('New message received:', message);
});

export { socket, sendMessage };`} />

      <p>
        The <code>io()</code> function is used to establish a connection to the server, and we can use <code>emit()</code> to send messages and <code>on()</code> to listen for server-sent events.
      </p>
    </div>
  );
};

export default SocketClientSlide;
