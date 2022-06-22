import { createSlice } from "@reduxjs/toolkit";
import { answerId } from "../types/step.interface";

// Define a type for the slice state
interface CounterState {
  totalQuestions: number;
  questionIndex: number;
  answers: answerId[];
}

// Define the initial state using that type
const initialState: CounterState = {
  totalQuestions: 10,
  questionIndex: 4,
  answers: [],
};

export const appSlice = createSlice({
  name: "steps",

  initialState,

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
