import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "steps",

  initialState: {
    totalQuestions: 10,
    questionIndex: 4,
  },

  reducers: {
    setTotalQuestions: (state, { payload }) => {
      state.totalQuestions = payload;
    },
    setQuestionIndex: (state, { payload }) => {
      state.questionIndex = payload;
    },
  },
});

export const { setTotalQuestions, setQuestionIndex } = appSlice.actions;

export default appSlice.reducer;
