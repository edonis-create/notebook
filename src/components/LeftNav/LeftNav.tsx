import "./LeftNav.scss";

import HorizontalLine from "../HorizontalLine/HorizontalLine";
import LeftNavHeader from "../LeftNavHeader/LeftNavHeader";
import NotesCardList from "../NotesCardList/NotesCardList";
import { notesData } from "../../dummy-data/data";
import { useState } from "react";

const LeftNav = () => {
  const [notes, setNotes] = useState(notesData);

  /**
   * FilterNotesByCategory is a function that takes a string as an argument and returns a filtered array
   * of notes based on the category property of each note.
   * @param {string} text - string - this is the text that is passed in from the search bar.
   */
  const filterNotesByCategory = (text: string) => {
    setNotes(
      notesData.filter((note) =>
        note.category.toLowerCase().includes(text.toLowerCase())
      )
    );
  };
  /**
   * We're using the React.ChangeEvent<HTMLInputElement> type to tell TypeScript that the event is a
   * change event and that the target is an HTML input element
   * @param e - React.ChangeEvent<HTMLInputElement>
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterNotesByCategory(e.target.value);
  };
  return (
    <div className="left-nav">
      <LeftNavHeader onChange={onChange} />
      <HorizontalLine />
      <NotesCardList notesData={notes} />
    </div>
  );
};

export default LeftNav;
