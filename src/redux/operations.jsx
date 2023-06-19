import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://640201b70a2a1afebef70cde.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  'users/toggleCompleted',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        following: !user.following,
        followers: !user.following ? user.followers + 1 : user.followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
