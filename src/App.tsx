import "./App.scss";

import Content from "./components/Content/Content";
import LeftNav from "./components/LeftNav/LeftNav";
import Stack from "./components/Stack/Stack";

function App() {
  return (
    <Stack className="App">
      <LeftNav />
      <Content />
    </Stack>
  );
}
export default App;
