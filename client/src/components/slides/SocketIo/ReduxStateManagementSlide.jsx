// src/components/slides/ReduxStateManagementSlide.jsx
import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock';

const ReduxStateManagementSlide = () => (
  <div className='slide redux-overview'>
    <h2>Redux Toolkit Overview</h2>
    <p>
      Redux Toolkit simplifies global state management in the app. It is used to handle the app's data flow and interactions with asynchronous operations such as API calls, particularly for user authentication, post management, and comments.
    </p>

    <h3>Key Integrations:</h3>

    <ul>
      <li><strong>Redux Thunk:</strong> Middleware for handling asynchronous actions, such as user login and data fetching.</li>
      <li><strong>Axios:</strong> Used for making HTTP requests to the backend, dispatched inside Redux actions.</li>
      <li><strong>Authorization:</strong> Redux manages user sessions and token-based authentication, ensuring secure routes.</li>
      <li><strong>Socket.IO:</strong> Real-time updates for posts and notifications integrated into Redux to maintain a consistent state.</li>
    </ul>

    <p>
      Redux Toolkit, along with integrations like Axios, Redux Thunk, and Socket.IO, helps us manage state and handle asynchronous operations seamlessly throughout the app.
    </p>
  </div>
);

export default ReduxStateManagementSlide;
