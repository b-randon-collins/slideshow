import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const likePost = createAsyncThunk('likes/likePost', async (postId) => {
  const response = await axios.post(`/api/posts/${postId}/likes`);
  return response.data;
});

export const unlikePost = createAsyncThunk('likes/unlikePost', async (postId) => {
  const response = await axios.delete(`/api/posts/${postId}/likes`);
  return response.data;
});

const likeSlice = createSlice({
  name: 'likes',
  initialState: { likes: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(likePost.fulfilled, (state, action) => {
        state.likes.push(action.payload);
      })
      .addCase(unlikePost.fulfilled, (state, action) => {
        state.likes = state.likes.filter(like => like.id !== action.payload.id);
      })
      .addCase(likePost.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default likeSlice.reducer;
