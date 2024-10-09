import React from 'react';
import CodeBlockComponent from '../../uiUtilities.jsx/codeBlock/CodeBlock.jsx';
import commentSliceFileContent from './files/CommentSlice.jsx';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
const CommentSliceSlide = ({ openModal }) => {

  const codeSnippet = `const commentSlice = createSlice({
    name: 'comments',
    initialState: { comments: [] },
    reducers: {
      setComments: (state, action) => {
        state.comments = action.payload;
      },
      addComment: (state, action) => {
        state.comments.push(action.payload);
      }
    }
  });`;

  return (
    <div className='slide comment-slice'>
      <div className="tech-integration">
        <img src="/assets/redux.png" alt="Redux Logo" 
        onClick={() => openModal(<CodeBlockComponent code={codeSnippet} />)} />
      </div>

      <h2>Comment Slice   
</h2>
<button  onClick={() => openModal(<CodeBlockComponent code={commentSliceFileContent} />)} >  <InsertDriveFileIcon 
       />
      /client/redux/commentSlice.js
      </button>
      <p>The `commentSlice` is responsible for managing comments on posts, handling fetching and creating comments.</p>
      <CodeBlockComponent code={codeSnippet} />
      <p>Actions in this slice allow for real-time comment updates and efficient state management for post discussions.</p>
    </div>
  );
};

export default CommentSliceSlide;
