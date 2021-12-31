import React, { useState } from "react";
import { StartingModal } from "./components/StartingModal";
import Board from "./components/Board";
import Clock from "./components/Clock";
import styles from './app.module.css'

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [timesUp, setTimesUp] = useState(false)

  return (
    <div className={styles.appContainer}>
      <div>
        {!showBoard ? (
          <StartingModal showBoard={showBoard} showBoardHandler={setShowBoard} />
        ) : (
          <div>
            <Clock timesUp={timesUp} setTimesUp={setTimesUp}/>
            <Board />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
