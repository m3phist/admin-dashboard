import { createSlice } from '@reduxjs/toolkit';

const initialSate = {
  mode: 'dark',
};

export const globalSlice = createSlice({
  name: 'global',
  initialSate,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
