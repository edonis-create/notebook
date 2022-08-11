import "./App.scss";

import SearchInput from "./components/SearchInput/SearchInput";
import Stack from "./components/Stack/Stack";

function App() {
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="flex-end">
        <SearchInput fontSize="base" value="Ermir" />
      </Stack>
    </div>
  );
}
export default App;
