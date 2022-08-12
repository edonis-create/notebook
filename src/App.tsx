import "./App.scss";

import LeftNav from "./components/LeftNav/LeftNav";
import { addNotesData } from "./redux/slices/NotesDataSlice";
import { notesData } from "./dummy-data/data";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addNotesData(notesData));
  }, []);

  return (
    <div className="App">
      <LeftNav />
    </div>
  );
}
export default App;
