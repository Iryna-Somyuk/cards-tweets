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
  "users/toggleCompleted",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, {
        following: !user.following,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editingContact = createAsyncThunk(
  'users/editingContact',
  async (user, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/${user.id}`, {
        followers: user.followers,
      });
      console.log(response.data);
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
