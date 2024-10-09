import { createSlice } from '@reduxjs/toolkit';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: { unreadPosts: 0 },
  reducers: {
    incrementUnread: (state) => {
      state.unreadPosts += 1;
    },
  },
});

export const { incrementUnread } = notificationSlice.actions;

export const listenForNotifications = () => (dispatch) => {
  socket.on('unreadPost', () => {
    dispatch(incrementUnread());
  });
};

export default notificationSlice.reducer;