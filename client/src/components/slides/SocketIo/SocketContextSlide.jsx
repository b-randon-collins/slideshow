import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const SocketContextSlide = () => {
  return (
    <div>
      <h2>Socket.IO Context: `SocketContext.js`</h2>
      <p>
        The <code>SocketContext.js</code> file provides a React context for the socket instance, allowing components to easily access and use the socket connection across the app.
      </p>
      <CodeBlockComponent code={`import React, { createContext, useContext } from 'react';
import { socket } from './SocketClient';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => (
  <SocketContext.Provider value={socket}>
    {children}
  </SocketContext.Provider>
);

export const useSocket = () => {
  return useContext(SocketContext);
};`} />

      <p>
        This context provides the socket connection globally within the app. Components can use the <code>useSocket()</code> hook to access the socket and send or receive messages.
      </p>
    </div>
  );
};

export default SocketContextSlide;
