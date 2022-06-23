import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "steps",

  initialState: {
    totalQuestions: 1,
    questionIndex: 1,
    actualQuestion: {},
  },

  reducers: {
    setTotalQuestions: (state, { payload }) => {
      state.totalQuestions = payload;
    },
    setQuestionIndex: (state, { payload }) => {
      state.questionIndex = payload;
    },
    setActualQuestion: (state, { payload }) => {
      state.actualQuestion = payload;
    },
  },
});

export const { setTotalQuestions, setQuestionIndex, setActualQuestion } =
  appSlice.actions;

export default appSlice.reducer;
