import HorizontalLine from "../HorizontalLine/HorizontalLine";
import NoteCard from "../NoteCard/NoteCard";
import { NotesData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";
import { setActiveNote } from "../../redux/slices/activeNoteSlice";
import { useDispatch } from "react-redux";

interface INotesCardListProps {
  notesData: NotesData;
  setEditNote: (editNote: boolean) => void;
}

const NotesCardList: React.FunctionComponent<INotesCardListProps> = ({
  notesData,
  setEditNote,
}) => {
  const dispatch = useDispatch();
  if (notesData.length === 0) {
    return (
      <Stack className="notes-list" justifyContent="center" alignItems="center">
        No Notes Found
      </Stack>
    );
  }
  /**
   * It takes an id, and then dispatches the setActiveNote action with that id
   * @param {number} id - number - the id of the note to be set as active
   */
  const handleSetActiveNote = (id: number) => {
    dispatch(setActiveNote(id));
    setEditNote(false);
  };

  return (
    <div className="notes-list">
      {notesData.map(({ title, created_at, category, id }) => {
        return (
          <>
            <NoteCard
              key={id}
              onClick={() => handleSetActiveNote(id)}
              title={title}
              created_at={created_at}
              category={category}
            />
            <HorizontalLine />
          </>
        );
      })}
    </div>
  );
};

export default NotesCardList;
