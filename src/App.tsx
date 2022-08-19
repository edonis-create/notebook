import "./App.scss";

import { useCallback, useState } from "react";

import Content from "./components/Content/Content";
import LeftNav from "./components/LeftNav/LeftNav";
import Stack from "./components/Stack/Stack";

function App() {
  const [editNote, setEditNote] = useState<boolean>(false);
  const handleEditNote = useCallback((editBoolean: boolean) => {
    setEditNote(editBoolean);
  }, []);
  return (
    <Stack className="App">
      <LeftNav setEditNote={handleEditNote} />
      <Content editNote={editNote} setEditNote={handleEditNote} />
    </Stack>
  );
}
export default App;
