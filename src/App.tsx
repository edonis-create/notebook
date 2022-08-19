import "./App.scss";

import { useCallback, useState } from "react";

import Breakpoints from "./foundation/Breakpoints";
import Content from "./components/Content/Content";
import LeftNav from "./components/LeftNav/LeftNav";
import Stack from "./components/Stack/Stack";
import { useSelector } from "react-redux";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const [editNote, setEditNote] = useState<boolean>(false);
  const showMobileContent = useSelector(
    (state: any) => state.showMobileContent.showMobileContent
  );
  /* A function that is called when the edit button is clicked. It is a callback function that is
  passed to the LeftNav component. */
  const handleEditNote = useCallback((editBoolean: boolean) => {
    setEditNote(editBoolean);
  }, []);

  const { width } = useWindowSize();
  const isTablet = width <= Breakpoints["md"];

  if (isTablet) {
    return (
      <Stack className={`App`}>
        {showMobileContent ? (
          <Content editNote={editNote} setEditNote={handleEditNote} />
        ) : (
          <LeftNav setEditNote={handleEditNote} />
        )}
      </Stack>
    );
  }
  return (
    <Stack className={`App`}>
      <LeftNav setEditNote={handleEditNote} />
      <Content editNote={editNote} setEditNote={handleEditNote} />
    </Stack>
  );
}
export default App;
