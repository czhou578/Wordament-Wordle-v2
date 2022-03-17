import { useState } from "react";
import { StartingModal } from "./components/StartingModal";
import Board from "./components/Board";
import Clock from "./components/Clock";
import styles from "./app.module.css";
import ScoreBoard from "./components/ScoreBoard";
import EndGameModal from "./components/EndGameModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [timesUp, setTimesUp] = useState(false);
  const [score, setScore] = useState(0);

  const notify = () => toast("Welcome to the Game");

  return (
    <div className={styles.appContainer}>
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
          <div>
            <Clock setTimesUp={setTimesUp} />
            <Board setScore={setScore} />
            <ScoreBoard score={score} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
