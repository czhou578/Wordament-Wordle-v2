import { useState } from "react";
import { StartingModal } from "../components/StartingModal";
import Board from "../components/Board";
import Clock from "../components/Clock";
import styles from "../app.module.css";
import ScoreBoard from "../components/ScoreBoard";
import EndGameModal from "../components/EndGameModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Headerbar } from "../components/Headerbar";

export const GameSetup: React.FC = () => {
  const [showBoard, setShowBoard] = useState<boolean>(false);
  const [timesUp, setTimesUp] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  
  return (
    <div className={styles.appContainer}>
    {showBoard ? <Headerbar /> : null}
    <div>
      {!showBoard ? (
        <>
          <StartingModal
            showBoard={showBoard}
            showBoardHandler={setShowBoard}
          />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      ) : timesUp ? (
        <>
          <EndGameModal score={score} setTimesUp={setTimesUp} />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <Clock setTimesUp={setTimesUp} />
          <Board setScore={setScore} />
          <ScoreBoard score={score} />
        </div>
      )}
    </div>
  </div>
  )
}