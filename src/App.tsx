import "./App.scss";

import Stack from "./components/Stack/Stack";

function App() {
  return (
    <div className="App">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
      </Stack>
    </div>
  );
}
export default App;
