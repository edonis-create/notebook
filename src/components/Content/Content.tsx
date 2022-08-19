import "./Content.scss";

import { useDispatch, useSelector } from "react-redux";

import { NoteData } from "../../dummy-data/data";
import NoteForm from "../NoteForm/NoteForm";
import NotePreview from "../NotePreview/NotePreview";
import Stack from "../Stack/Stack";
import { addNotesData } from "../../redux/slices/NotesDataSlice";

interface IContentProps {
  editNote: boolean;
  setEditNote: (editNote: boolean) => void;
}
const Content: React.FC<IContentProps> = ({ editNote }) => {
  const activeNoteId = useSelector(
    (state: any) => state.activeNote.activeNoteId
  );
  const notes = useSelector((state: any) => state.notesData.notesData);
  const dispatch = useDispatch();

  /* Checking if the editNote is true, if it is, it will return the last note in the array, if it is
  false, it will return the note that matches the activeNoteId. If there is no note that matches the
  activeNoteId, it will return the last note in the array. */
  const activeNote = editNote
    ? notes.at(-1)
    : notes.find((note: NoteData) => note.id === activeNoteId) ?? notes.at(-1);

  /**
   * It takes a note as an argument, and then it returns a new array of notes, where the note that
   * matches the id of the note passed in is replaced with the note passed in
   * @param {NoteData} note - NoteData - this is the note that we want to update
   */
  const handleUpdateNote = (note: NoteData) => {
    const newNotes = notes.map((noteData: NoteData) => {
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
      {editNote ? (
        <NoteForm activeNote={activeNote} handleUpdateNote={handleUpdateNote} />
      ) : (
        <NotePreview note={activeNote} />
      )}
    </Stack>
  );
};

export default Content;
