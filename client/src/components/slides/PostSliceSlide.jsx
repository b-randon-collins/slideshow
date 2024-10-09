import React from 'react';
import CodeBlockComponent from '../uiUtilities.jsx/codeBlock/CodeBlock';

const PostSliceSlide = () => {
  const codeSnippet = `const postSlice = createSlice({
  name: 'posts',
  initialState: { posts: [] },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    }
  }
});`;

  return (
    <div className='slide post-slice'>
      <h2>Post Slice</h2>
      <p>
        The \`postSlice\` manages the state of posts within the application, including fetching and creating posts.
      </p>
      <CodeBlockComponent code={codeSnippet} />
      <p>
        This slice handles the global state for posts, enabling features like viewing and adding posts.
      </p>
    </div>
  );
};

export default PostSliceSlide;
