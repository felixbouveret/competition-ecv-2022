import { configureStore } from "@reduxjs/toolkit";
import AppReducer from "./App";
import StepsReducer from "./Steps";

export const store = configureStore({
  reducer: {
    app: AppReducer,
    steps: StepsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
