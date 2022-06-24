import { createSlice } from "@reduxjs/toolkit";
import { answerId } from "@/types/step.interface";

// Define a type for the slice state
interface StepsState {
  progress: number;
  answers: answerId[];
}

// Define the initial state using that type
const initialState: StepsState = {
  answers: [],
  progress: 1,
};

export const appSlice = createSlice({
  name: "steps",

  initialState,

  reducers: {
    setProgress: (state, { payload }) => {
      state.progress = payload;
    },
    setAnswers: (state, { payload }) => {
      state.answers = payload;
    },
  },
});

export const { setProgress, setAnswers } = appSlice.actions;

export default appSlice.reducer;
