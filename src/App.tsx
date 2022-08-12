import "./App.scss";

import Button from "./components/Button/Button";
import { ReactComponent as NoteIcon } from "./assets/icons/new-note.svg";
import SearchInput from "./components/SearchInput/SearchInput";
import Stack from "./components/Stack/Stack";

function App() {
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="flex-end">
        <SearchInput fontSize="base" value="Ermir" />
        <Button
          leftIcon={<NoteIcon />}
          designType="icon"
          width="md"
          fontSize="sm"
        />
      </Stack>
    </div>
  );
}
export default App;
