// src/components/slides/ReduxToolKit/files/CommentSliceContent.js

const commentSliceFileContent = `import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchComments = createAsyncThunk("comments/fetchComments", async (postId) => {
  const response = await axios.get(\`/api/comments/\${postId}\`);
  return response.data;
});

const commentSlice = createSlice({
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
});

export const { setComments, addComment } = commentSlice.actions;
export default commentSlice.reducer;
`;

export default commentSliceFileContent;
