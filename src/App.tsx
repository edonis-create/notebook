import "./App.scss";

import SearchInput from "./components/SearchInput/SearchInput";
import Stack from "./components/Stack/Stack";

function App() {
  return (
    <div className="App">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <SearchInput fontSize="xl" value="Ermir" />
      </Stack>
    </div>
  );
}
export default App;
