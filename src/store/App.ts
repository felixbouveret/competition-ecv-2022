import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isPopinDisplayed: false,
  },

  reducers: {
    setPopinDisplayed: (state, { payload }) => {
      state.isPopinDisplayed = payload;
    },
  },
});

export const { setPopinDisplayed } = appSlice.actions;

export default appSlice.reducer;
