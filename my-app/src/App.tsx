import { useState } from "react";
import { StartingModal } from "./components/StartingModal";
import Board from "./components/Board";
import Clock from "./components/Clock";
import styles from './app.module.css'
import ScoreBoard from "./components/ScoreBoard";
import EndGameModal from "./components/EndGameModal";

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [timesUp, setTimesUp] = useState(false)
  const [score, setScore] = useState(0)

  return (
    <div className={styles.appContainer}>
      <div>
        {!showBoard ? (
          <EndGameModal />
          // <StartingModal showBoard={showBoard} showBoardHandler={setShowBoard} />
        ) : timesUp ? (
          <EndGameModal />
          
        ) :(
          <div>
            <Clock timesUp={timesUp} setTimesUp={setTimesUp}/>
            <Board setScore={setScore}/>
            <ScoreBoard score={score}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
