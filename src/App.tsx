import "./App.scss";

import Button from "./components/Button/Button";
import HorizontalLine from "./components/HorizontalLine/HorizontalLine";
import NoteCard from "./components/NoteCard/NoteCard";
import { ReactComponent as NoteIcon } from "./assets/icons/new-note.svg";
import NotesCardList from "./components/NotesCardList/NotesCardList";
import { notesData } from "./dummy-data/data";

function App() {
  return (
    <div className="App">
      <NotesCardList notesData={notesData} />
    </div>
  );
}
export default App;
