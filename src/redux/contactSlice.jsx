import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { editingContact, fetchContacts, toggleCompleted } from './operations';

const extraActions = [fetchContacts, toggleCompleted, editingContact];
const getActions = type => extraActions.map(action => action[type]);

export const contactSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    return builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(toggleCompleted.fulfilled, (state, action) => {

        const i = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(i, 1, {
          ...state.items[i],
          following: action.payload.following,
          
        });
      })
      .addCase(editingContact.fulfilled, (state, action) => {
        const i = state.items.findIndex(
          user => user.id === action.payload.id
        );
        state.items.splice(i, 1, {
          ...state.items[i],
          followers: action.payload.followers,
          
        });
      })

   
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoading = false;
        state.error = null;
      });
  },
});


export const contactReducer = contactSlice.reducer;