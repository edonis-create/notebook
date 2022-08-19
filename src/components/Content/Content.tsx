import "./Content.scss";

import { useDispatch, useSelector } from "react-redux";

import { NoteData } from "../../dummy-data/data";
import NoteForm from "../NoteForm/NoteForm";
import Stack from "../Stack/Stack";
import { addNotesData } from "../../redux/slices/NotesDataSlice";

const Content = () => {
  const activeNotId = useSelector(
    (state: any) => state.activeNote.activeNoteId
  );
  const Notes = useSelector((state: any) => state.notesData.notesData);
  const dispatch = useDispatch();
  /* Finding the active note from the list of notes. */
  const activeNote = Notes.find((note: NoteData) => note.id === activeNotId);

  /**
   * It takes a note as an argument, and then it returns a new array of notes, where the note that
   * matches the id of the note passed in is replaced with the note passed in
   * @param {NoteData} note - NoteData - this is the note that we want to update
   */
  const handleUpdateNote = (note: NoteData) => {
    const newNotes = Notes.map((noteData: NoteData) => {
      if (noteData.id === note.id) {
        return note;
      }
      return noteData;
    });
    dispatch(addNotesData(newNotes));
  };

  if (!activeNote) {
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        className="full_height full_width"
      >
        No note selected
      </Stack>
    );
  }
  return (
    <Stack direction="column" alignItems="center" className="content">
      <NoteForm activeNote={activeNote} handleUpdateNote={handleUpdateNote} />
    </Stack>
  );
};

export default Content;
