import { NoteData, NotesData, notesData } from "../../dummy-data/data";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  notesData: NotesData;
}
const initialState: InitialState = {
  notesData: notesData,
};
export const notesDataSlice = createSlice({
  name: "notesData",
  initialState,
  reducers: {
    addNotesData(state: InitialState, action: PayloadAction<NotesData>) {
      state.notesData = action.payload;
    },
    removeNotesData(state: InitialState, action: PayloadAction<number>) {
      state.notesData = state.notesData.filter(
        (noteData: NoteData) => noteData.id !== action.payload
      );
    },
  },
});

export const { addNotesData } = notesDataSlice.actions;
export default notesDataSlice.reducer;
