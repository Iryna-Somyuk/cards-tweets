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


// export const editingContact = createAsyncThunk(
//   'contacts/editingContact',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.patch(`/contacts/${contact.id}`, {
//         name: contact.name,
//         number: contact.number,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
