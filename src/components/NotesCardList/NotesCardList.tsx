import HorizontalLine from "../HorizontalLine/HorizontalLine";
import NoteCard from "../NoteCard/NoteCard";
import { NotesData } from "../../dummy-data/data";
import React from "react";
import Stack from "../Stack/Stack";

interface INotesCardListProps {
  notesData: NotesData;
}

const NotesCardList: React.FunctionComponent<INotesCardListProps> = ({
  notesData,
}) => {
  if (notesData.length === 0) {
    return (
      <Stack className="notes-list" justifyContent="center" alignItems="center">
        No Notes Found
      </Stack>
    );
  }
  return (
    <div className="notes-list">
      {notesData.map(({ title, created_at, category, id }) => {
        return (
          <>
            <NoteCard
              key={id}
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
