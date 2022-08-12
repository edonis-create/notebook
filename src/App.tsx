import "./App.scss";

import Button from "./components/Button/Button";
import SearchInput from "./components/SearchInput/SearchInput";
import Stack from "./components/Stack/Stack";

function App() {
  return (
    <div className="App">
      <Stack direction="row" justifyContent="center" alignItems="flex-end">
        <SearchInput fontSize="base" value="Ermir" />
        <Button label="Edonis" fontSize="sm" />
      </Stack>
    </div>
  );
}
export default App;
