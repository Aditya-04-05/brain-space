import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Brain-space Workspace</h1>
      <p>React is running.</p>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;
