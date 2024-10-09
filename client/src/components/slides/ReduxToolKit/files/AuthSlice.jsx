import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null, isAuthenticated: false },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  }
});

export const { setToken, clearToken } = authSlice.actions;

export const loginWithToken = (token) => async (dispatch) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  dispatch(setToken(token));
};

export default authSlice.reducer;