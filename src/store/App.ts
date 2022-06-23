import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isPopinDisplayed: boolean;
  isProgressBarDisplayed: boolean;
  productId: string;
  isIntroduction: boolean;
  currentStepType: string;
  isVideoDisplayed: boolean;
}
const initialState: AppState = {
  isPopinDisplayed: false,
  isProgressBarDisplayed: false,
  isIntroduction: true,
  isVideoDisplayed: false,
  currentStepType: "",
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
    setIntroduction: (state, { payload }) => {
      state.isIntroduction = payload;
    },
    setCurrentStepType: (state, { payload }) => {
      state.currentStepType = payload;
    },
    setVideoDisplayed: (state, { payload }) => {
      state.isVideoDisplayed = payload;
    },
  },
});

export const {
  setPopinDisplayed,
  setProgressBarDisplayed,
  setIntroduction,
  setCurrentStepType,
  setVideoDisplayed,
  setProductId,
} = appSlice.actions;

export default appSlice.reducer;
