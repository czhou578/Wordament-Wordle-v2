import React, { useState } from "react";
import { StartingModal } from "./components/StartingModal";
import Board from "./components/Board";
import Clock from "./components/Clock";

function App() {
  const [showBoard, setShowBoard] = useState(false);

  return (
    <div className="App">
      {!showBoard ? (
        <StartingModal showBoard={showBoard} showBoardHandler={setShowBoard} />
      ) : (
        <div>
          <Clock />
          <Board />
        </div>
      )}
    </div>
  );
}

export default App;
