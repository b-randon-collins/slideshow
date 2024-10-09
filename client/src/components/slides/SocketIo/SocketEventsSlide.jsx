import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const SocketEventsSlide = () => {
  return (
    <div>
      <h2>Socket.IO Events: `SocketEvents.js`</h2>
      <p>
        The <code>SocketEvents.js</code> file defines the custom events that are used throughout the application for communication between the client and server via Socket.IO.
      </p>
      <CodeBlockComponent code={`export const SOCKET_EVENTS = {
  CONNECTION: 'connection',
  DISCONNECT: 'disconnect',
  SEND_MESSAGE: 'sendMessage',
  NEW_MESSAGE: 'newMessage',
};`} />

      <p>
        By defining all socket event types in a single file, we ensure that event names are consistent across the client and server. This helps prevent errors and makes the code easier to maintain.
      </p>
    </div>
  );
};

export default SocketEventsSlide;
