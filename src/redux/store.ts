import { configureStore } from "@reduxjs/toolkit";
import notesDataReducer from "./slices/NotesDataSlice";
export const store = configureStore({
  reducer: {
    notesData: notesDataReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
