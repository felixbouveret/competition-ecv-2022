import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isPopinDisplayed: boolean;
  isProgressBarDisplayed: boolean;
  productId: string;
}
const initialState: AppState = {
  isPopinDisplayed: false,
  isProgressBarDisplayed: true,
  productId: "",
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
    setProductId: (state, { payload }) => {
      state.productId = payload;
    },
  },
});

export const { setPopinDisplayed, setProgressBarDisplayed, setProductId } =
  appSlice.actions;

export default appSlice.reducer;
