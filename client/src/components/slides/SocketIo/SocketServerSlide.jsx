import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const SocketServerSlide = () => {
  return (
    <div>
      <h2>Socket.IO Server: `SocketServer.js`</h2>
      <p>
        The <code>SocketServer.js</code> file handles the server-side logic for Socket.IO, including setting up the socket connection and defining event handlers for communication with clients.
      </p>
      <CodeBlockComponent code={`const { Server } = require('socket.io');

const io = new Server(5000, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('sendMessage', (msg) => {
    console.log('Message received:', msg);

    io.emit('newMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

module.exports = io;`} />

      <p>
        Here, we create a Socket.IO server and define event listeners for <code>connection</code>, <code>sendMessage</code>, and <code>disconnect</code>. Messages received from one client are broadcast to all clients using <code>io.emit()</code>.
      </p>
    </div>
  );
};

export default SocketServerSlide;
