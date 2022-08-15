import Input from "../SearchInput/SearchInput";
import { NoteData } from "../../dummy-data/data";
import Stack from "../Stack/Stack";
import { useSelector } from "react-redux";

const Content = () => {
  const activeNotId = useSelector(
    (state: any) => state.activeNote.activeNoteId
  );
  const Notes = useSelector((state: any) => state.notesData.notesData);

  /* Finding the active note from the list of notes. */
  const activeNote = Notes.find((note: NoteData) => note.id === activeNotId);

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
    <div className="content">
      <form>
        <Input
          type="text"
          placeholder="Note Title"
          value={activeNote.title}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Content;
