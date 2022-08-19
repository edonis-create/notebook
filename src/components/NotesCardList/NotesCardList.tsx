import Breakpoints from "../../foundation/Breakpoints";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import NoteCard from "../NoteCard/NoteCard";
import { NotesData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";
import { setActiveNote } from "../../redux/slices/activeNoteSlice";
import { setShowMobileContent } from "../../redux/slices/showMobileContentSlice";
import { useDispatch } from "react-redux";
import useWindowSize from "../../hooks/useWindowSize";

interface INotesCardListProps {
  notesData: NotesData;
  setEditNote: (editNote: boolean) => void;
}

const NotesCardList: React.FunctionComponent<INotesCardListProps> = ({
  notesData,
  setEditNote,
}) => {
  const dispatch = useDispatch();
  const { width } = useWindowSize();
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
  };

  /**
   * We're using the id of the note to set the active note and then we're setting the editNote state to
   * false
   * @param {number} id - number - the id of the note that was clicked
   */
  const handleOnCardClick = (id: number) => {
    handleSetActiveNote(id);
    setEditNote(false);
    width <= Breakpoints["md"] && dispatch(setShowMobileContent(true));
  };

  return (
    <div className="notes-list">
      {notesData.map(({ title, created_at, category, id }) => {
        return (
          <>
            <NoteCard
              key={id}
              onClick={() => handleOnCardClick(id)}
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
