import { Routes, Route } from "react-router-dom";
import { GameSetup } from "./components/GameSetup";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GameSetup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
