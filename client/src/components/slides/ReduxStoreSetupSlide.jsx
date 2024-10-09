import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const ReduxStoreSetupSlide = () => {
  const codeSnippet = `const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postSlice,
    comments: commentSlice
  }
});`;

  return (
    <div className='slide redux-store'>
      <h2>Redux Store Setup</h2>
      <p>
        The Redux store is the core of the state management system. All slices are combined here to manage global application state.
      </p>
      <CodeBlockComponent code={codeSnippet} />
      <p>
        This setup ensures that each feature, such as users, posts, and comments, has its own slice for state management.
      </p>
    </div>
  );
};

export default ReduxStoreSetupSlide;
