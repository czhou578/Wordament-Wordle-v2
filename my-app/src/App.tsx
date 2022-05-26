
import { Routes, Route } from "react-router-dom";
import { GameSetup } from "./components/GameSetup";
import { Signup } from "./components/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameSetup />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
