import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const rootReducer = combineReducers({
  users: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});