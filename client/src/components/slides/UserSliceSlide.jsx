import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const UserSliceSlide = () => {
  const codeSnippet = `const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});`;

  return (
    <div className='slide user-slice'>
      <h2>User Slice</h2>
      <p>
        The \`userSlice\` handles all state and actions related to user authentication and profile management.
      </p>
      <CodeBlockComponent code={codeSnippet} />
      <p>
        Key actions include <strong>loginSuccess</strong> for storing user data upon successful login, and <strong>logout</strong> to clear user data on logout.
      </p>
    </div>
  );
};

export default UserSliceSlide;
