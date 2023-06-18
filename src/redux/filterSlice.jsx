import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../redux/constans";

const filtersInitialState = {
    status: statusFilters.all,
  };
export const filterSlice = createSlice({
    name: 'filter',
    initialState: filtersInitialState,
    reducers: {
        setFilter(state, action) {
            state.status = action.payload;        
        },
       
    }
});

export const filterReducer = filterSlice.reducer;
export const {setFilter} = filterSlice.actions;