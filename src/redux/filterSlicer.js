import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: ' ' },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;

export const getFilter = state => state.filter.filter;
