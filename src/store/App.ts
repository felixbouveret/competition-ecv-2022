import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isPopinDisplayed: boolean;
  isProgressBarDisplayed: boolean;
}
const initialState: AppState = {
  isPopinDisplayed: false,
  isProgressBarDisplayed: true,
};
export const appSlice = createSlice({
  name: "app",

  initialState,

  reducers: {
    setPopinDisplayed: (state, { payload }) => {
      state.isPopinDisplayed = payload;
    },
    setProgressBarDisplayed: (state, { payload }) => {
      state.isProgressBarDisplayed = payload;
    },
  },
});

export const { setPopinDisplayed, setProgressBarDisplayed } = appSlice.actions;

export default appSlice.reducer;
