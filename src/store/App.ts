import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",

  initialState: {
    isPopinDisplayed: false,
    totalQuestions: 10,
    questionIndex: 4,
  },

  reducers: {
    setPopinDisplayed: (state, { payload }) => {
      state.isPopinDisplayed = payload;
    },
    setTotalQuestions: (state, { payload }) => {
      state.totalQuestions = payload;
    },
    setQuestionIndex: (state, { payload }) => {
      state.questionIndex = payload;
    },
  },
});

export const { setPopinDisplayed, setTotalQuestions, setQuestionIndex } =
  appSlice.actions;

export default appSlice.reducer;
