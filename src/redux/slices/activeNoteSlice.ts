import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ActiveNoteInitialState {
  activeNoteId: number | null;
}
const initialState: ActiveNoteInitialState = {
  activeNoteId: null,
};
export const activeNoteSlice = createSlice({
  name: "activeNote",
  initialState,
  reducers: {
    setActiveNote(
      state: ActiveNoteInitialState,
      action: PayloadAction<number | null>
    ) {
      state.activeNoteId = action.payload;
    },
  },
});

export const { setActiveNote } = activeNoteSlice.actions;
export default activeNoteSlice.reducer;
