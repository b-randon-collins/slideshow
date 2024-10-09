import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const SocketIOLiveUpdatesSlide = () => {
  const codeSnippet = `const socket = io.connect('http://localhost:3000');

socket.on('newComment', (comment) => {
  dispatch(addComment(comment));
});

socket.on('newLike', (like) => {
  dispatch(addLike(like));
});`;

  return (
    <div>

      <div className="tech-integration">
        <img src="/assets/socketio.png" alt="Socket.IO Logo" />
        <img src="/assets/react.png" alt="React Logo" />
      </div>

      <h2>Socket.IO for Live Updates</h2>

      <p>Socket.IO enables real-time updates to the UI, such as new comments or likes appearing immediately.</p>

      <ul>
        <li>When a new comment or like is received on the server, it emits an event using Socket.IO.</li>
        <li>The client listens for these events and dispatches Redux actions to update the state, allowing the UI to reflect the changes instantly.</li>
      </ul>      <CodeBlockComponent code={codeSnippet} />

    </div>
  );
};

export default SocketIOLiveUpdatesSlide;
